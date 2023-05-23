const base = {
    _app: {
        import: [
            "import { withEmotionCache } from '@emotion/react';",
            `import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";`,
        ],
        refineProps: ["notificationProvider={notificationProvider}"],
        refineMuiImports: ["notificationProvider", "RefineSnackbarProvider"],
        localImport: [`import { ClientStyleContext } from "~/contexts";`],
        wrapper: [["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"]],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
