const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [
            `import { CssBaseline, GlobalStyles } from "@mui/material";`,
        ],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
            "Layout"
        ],
        localImport: [
            `import { ColorModeContextProvider } from "./contexts/color-mode";`
        ],
        wrapper: [
            [`<BrowserRouter>`, `</BrowserRouter>`],
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            [`<CssBaseline />`, ``],
            [`<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`, ``],
            [`<RefineSnackbarProvider>`, `</RefineSnackbarProvider>`]

        ],
        layoutWrapper: [],
        refineComponents: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
