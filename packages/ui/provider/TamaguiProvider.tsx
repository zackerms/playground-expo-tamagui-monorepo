import { tamaguiConfig } from "@my-app/ui/tamagui.config";
import { TamaguiProvider as TamaguiRootProvider } from "@tamagui/core";
import type { ReactNode } from "react";

export function TamaguiProvider({ children }: { children: ReactNode }) {
  return <TamaguiRootProvider config={tamaguiConfig}>{children}</TamaguiRootProvider>;
}
