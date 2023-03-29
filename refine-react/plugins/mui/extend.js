const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [`import { CssBaseline, GlobalStyles } from "@mui/material";`],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
            "ThemedLayout",
            "ErrorComponent",
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
