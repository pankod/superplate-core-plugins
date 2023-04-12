import { defineConfig } from "cypress";
import { cloudPlugin } from "cypress-cloud/plugin";

export default defineConfig({
    projectId: "superplate",
    e2e: {
        setupNodeEvents(on, config) {
            return cloudPlugin(on, config);
        },
    },
    chromeWebSecurity: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
});
