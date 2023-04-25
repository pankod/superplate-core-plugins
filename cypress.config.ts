import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "a7292t",
    e2e: {},
    chromeWebSecurity: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
});
