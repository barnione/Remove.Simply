import { HeroUIProvider, ToastProvider } from "@heroui/react";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider>
      <ToastProvider placement="bottom-right" />
      {children}
    </HeroUIProvider>
  );
}
