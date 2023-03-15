const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [
            `import { CssBaseline, GlobalStyles } from "@mui/material";`,
        ],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
            "Layout",
            "ErrorComponent"
        ],
        localImport: [
            `import { ColorModeContextProvider } from "./contexts/color-mode";`,
            `import { Header } from "./components/header";`
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            [`<CssBaseline />`, ``],
            [`<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`, ``],
            [`<RefineSnackbarProvider>`, `</RefineSnackbarProvider>`]

        ],
        refineComponents: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
