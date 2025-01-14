import { TamaguiProvider } from "@my-app/ui/provider/TamaguiProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider>
      <Component {...pageProps} />
    </TamaguiProvider>
  );
}
