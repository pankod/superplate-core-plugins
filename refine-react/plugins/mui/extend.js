const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [
            `import GlobalStyles from "@mui/material/GlobalStyles";`,
            `import CssBaseline from "@mui/material/CssBaseline";`,
        ],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
            "ThemedLayoutV2",
        ],
        localImport: [
            `import { ColorModeContextProvider } from "./contexts/color-mode";`,
            `import { Header } from "./components/header";`,
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            [`<CssBaseline />`, ``],
            [
                `<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`,
                ``,
            ],
            [`<RefineSnackbarProvider>`, `</RefineSnackbarProvider>`],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
