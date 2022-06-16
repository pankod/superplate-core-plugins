const base = {
    _app: {
        localImport: ['import { ColorModeContextProvider } from "./contexts";'],
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
