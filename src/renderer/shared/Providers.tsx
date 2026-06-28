import { ToastProvider } from "@heroui/react";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ToastProvider placement="bottom end" />
      {children}
    </>
  );
}
