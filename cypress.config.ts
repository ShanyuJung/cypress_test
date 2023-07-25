import { loadEnvConfig } from "@next/env";
import { defineConfig } from "cypress";

const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
  env: {
    DEV_API_KEY: combinedEnv.DEV_API_KEY,
    TEST_API_KEY: combinedEnv.TEST_API_KEY,
    PROD_API_KEY: combinedEnv.PROD_API_KEY,
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: {
      runMode: 3,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  video: true,
  screenshotOnRunFailure: true,
});
