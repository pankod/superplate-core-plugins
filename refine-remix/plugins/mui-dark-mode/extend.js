const base = {
    _app: {
        localImport: [
            'import { ColorModeContextProvider } from "~/contexts";',
        ],
        wrapper: [
            ["<ColorModeContextProvider>", "</ColorModeContextProvider>"],
            ["<CssBaseline />"],
            [`<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`],
            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
        refineProps: [],
    },
};

module.exports = {
    extend(answers) {
        if(answers["mui-custom-layout"] !== "mui-custom-layout") {
            base._app.localImport.push(`import { Header } from "~/components/layout"`)
            base._app.refineProps.push("Header={Header}")
        }
        return base;
    }
};
