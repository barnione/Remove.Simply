import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

interface WorkerInput {
  onnxPath: string;
  floatDataBase64: string;
  size: number;
  executionProvider: string;
}

process.parentPort.on("message", async ({ data: input }: { data: WorkerInput }) => {
  try {
    const { onnxPath, floatDataBase64, size, executionProvider } = input;

    const floatBuf = Buffer.from(floatDataBase64, "base64");
    const floatData = new Float32Array(floatBuf.buffer, floatBuf.byteOffset, floatBuf.byteLength / 4);

    const ort = require("onnxruntime-node");

    let session: any;
    try {
      const providers: string[] = executionProvider === "coreml" ? ["coreml", "cpu"] : ["cpu"];
      session = await ort.InferenceSession.create(onnxPath, { executionProviders: providers });
    } catch {
      session = await ort.InferenceSession.create(onnxPath, { executionProviders: ["cpu"] });
    }

    const inputName = session.inputNames[0];
    const tensor = new ort.Tensor("float32", floatData, [1, 3, size, size]);
    const results = await session.run({ [inputName]: tensor });
    const outputTensor = results[session.outputNames[0]];
    const outputData = new Float32Array(outputTensor.data as Float32Array);

    const outBuf = Buffer.from(outputData.buffer, outputData.byteOffset, outputData.byteLength);
    process.parentPort.postMessage({ data: outBuf.toString("base64") });
  } catch (err: any) {
    process.parentPort.postMessage({ error: err.message || "inference failed" });
  }
});
