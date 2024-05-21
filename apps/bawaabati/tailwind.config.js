import baseConfig from "@ded-monorepo/ui/tailwind.config";

export default {
  content: [
    "./src/**/*.{ts,js,jsx,tsx}",
    "../../packages/ui/src/**/*.{ts,js,jsx,tsx}",
  ],
  presets: [baseConfig],
  theme: {
    extend: {
      overflow: {
        body: "hidden",
      },
    },
  },
};
