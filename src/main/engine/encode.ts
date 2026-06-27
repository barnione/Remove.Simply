import sharp from "sharp";
import type { OutputFormat } from "../../types";

export function mimeForFormat(format: OutputFormat): string {
  if (format === "jpg") return "image/jpeg";
  if (format === "webp") return "image/webp";
  return "image/png";
}

export async function encodeOutput(
  rgba: Buffer,
  width: number,
  height: number,
  format: OutputFormat,
  quality: number,
  transparentBackground: boolean,
  backgroundColor: string
): Promise<Buffer> {
  let image = sharp(rgba, { raw: { width, height, channels: 4 } });

  if (!transparentBackground || format === "jpg") {
    image = image.flatten({ background: backgroundColor });
  }

  if (format === "webp") return image.webp({ quality }).toBuffer();
  if (format === "jpg") return image.jpeg({ quality }).toBuffer();
  return image.png().toBuffer();
}
