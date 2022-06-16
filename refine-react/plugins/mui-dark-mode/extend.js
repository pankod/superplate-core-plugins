const base = {
    _app: {
        localImport: [
            'import { ColorModeContextProvider } from "./contexts";',
            'import { Header } from "./components/header";'
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            ["<CssBaseline />"],
            [`<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`],
            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
        refineProps: ["Header={Header}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
