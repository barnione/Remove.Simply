type PipelineFn = (input: Buffer) => Promise<unknown>;

const loaded = new Map<string, Promise<PipelineFn>>();

export function getCachedPipeline(modelId: string): Promise<PipelineFn> | undefined {
  return loaded.get(modelId);
}

export function setCachedPipeline(modelId: string, pipeline: Promise<PipelineFn>): void {
  loaded.set(modelId, pipeline);
}

export function clearCachedPipeline(modelId: string): void {
  loaded.delete(modelId);
}
