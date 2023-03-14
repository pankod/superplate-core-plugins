const base = {
    _app: {
        import: [
            `import { CssBaseline, GlobalStyles } from "@mui/material";`,
        ],
        refineProps: ["notificationProvider={notificationProvider}"],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
        ],
        localImport: [
            `import ClientStyleContext from '~/contexts/ClientStyleContext';`,
            `import { ColorModeContextProvider } from "~/contexts";`,
        ],
        import: [
            "import { withEmotionCache } from '@emotion/react';",
            "import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material';",
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            ["<CssBaseline />"],
            [`<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`],
            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
