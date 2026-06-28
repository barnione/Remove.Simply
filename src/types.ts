export type OutputFormat = "png" | "webp" | "jpg";
export type ExecutionProvider = "cpu" | "coreml";

export type ModelStatus = "ready" | "missing" | "downloading";

export type ModelFamily = "u2net" | "isnet" | "birefnet";

export interface ModelInfo {
  id: string;
  label: string;
  family: ModelFamily;
  onnxFile: string;
  approxSizeMB: number;
  speedNote: string;
  default?: boolean;
  cached: boolean;
  sizeOnDiskMB: number;
  status: ModelStatus;
}

export interface AlphaMattingSettings {
  enabled: boolean;
  foregroundThreshold: number;
  backgroundThreshold: number;
  erodeSize: number;
}

export interface AppSettings {
  defaultModel: string;
  outputFormat: OutputFormat;
  outputQuality: number;
  transparentBackground: boolean;
  backgroundColor: string;
  executionProvider: ExecutionProvider;
  maxUploadSizeMB: number;
  darkTheme: boolean;
  autoUpdatesEnabled: boolean;
  alphaMatting: AlphaMattingSettings;
}

export interface RemoveOptions {
  modelId: string;
  format: OutputFormat;
  quality: number;
  transparentBackground: boolean;
  backgroundColor: string;
  executionProvider: ExecutionProvider;
  alphaMatting: AlphaMattingSettings;
}

export interface RemoveResult {
  buffer: ArrayBuffer;
  mimeType: string;
  width: number;
  height: number;
  usedFallback: boolean;
}

export interface DownloadProgress {
  modelId: string;
  progress: number;
  status: "downloading" | "ready" | "error";
  message?: string;
}

export interface UpdateInfoPayload {
  version: string;
  releaseNotes?: string;
  downloaded: boolean;
  autoUpdatesEnabled: boolean;
}
