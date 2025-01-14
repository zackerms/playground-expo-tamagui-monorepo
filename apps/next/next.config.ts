import type { NextConfig } from "next";
import { withTamagui as tamagui } from '@tamagui/next-plugin';

const withTamagui = tamagui({
  config: "../../packages/ui/tamagui.config",
  components: ["tamagui"],
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withTamagui(nextConfig);
