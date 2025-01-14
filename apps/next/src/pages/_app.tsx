import type { AppProps } from "next/app";
import {TamaguiProvider} from "@my-app/ui/provider/TamaguiProvider";

export default function App({ Component, pageProps }: AppProps) {
  return <TamaguiProvider>
    <Component {...pageProps} />
  </TamaguiProvider>
}
