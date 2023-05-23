const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
            "ThemedLayoutV2",
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            ["<CssBaseline />"],
            [
                `<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`,
            ],
            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
        import: [
            `import GlobalStyles from "@mui/material/GlobalStyles";`,
            `import CssBaseline from "@mui/material/CssBaseline";`,
        ],
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
