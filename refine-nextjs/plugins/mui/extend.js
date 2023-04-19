const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
            "ThemedLayout",
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            ["<CssBaseline />"],
            [
                `<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`,
            ],
            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
        import: [`import { CssBaseline, GlobalStyles } from "@mui/material";`],
        localImport: [
            'import { ColorModeContextProvider } from "@contexts";',
            'import { Header } from "@components/header";',
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
