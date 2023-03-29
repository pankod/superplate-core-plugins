const base = {
    _app: {
        import: [
            "import { withEmotionCache } from '@emotion/react';",
            `import { CssBaseline, GlobalStyles , unstable_useEnhancedEffect as useEnhancedEffect} from "@mui/material";`,
        ],
        refineProps: ["notificationProvider={notificationProvider}"],
        refineMuiImports: ["notificationProvider", "RefineSnackbarProvider"],
        localImport: [
            `import ClientStyleContext from '~/contexts/ClientStyleContext';`,
            `import { ColorModeContextProvider } from "~/contexts";`,
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            ["<CssBaseline />"],
            [
                `<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`,
            ],
            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
