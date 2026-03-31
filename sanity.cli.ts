import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fvp2sfim",
    dataset: "production",
  },
  deployment: {
    appId: "u3zayglgzatpno0q20abn0wd",
  },
});
