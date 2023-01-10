const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        refineMuiImports: [
            "notificationProvider",
            "RefineSnackbarProvider",
            "CssBaseline",
            "GlobalStyles",
        ],
        localImport: [
            "import ClientStyleContext from '~/contexts/ClientStyleContext';",
        ],
        import: [
            "import { withEmotionCache } from '@emotion/react';",
            "import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material';",
        ],
        wrapper: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers["mui-custom-layout"] === "no") {
            base._app.refineMuiImports.push("Layout");
            base._app.refineProps.push("Layout={Layout}");
        }

        if (answers["mui-dark-mode"] === "no") {
            base._app.refineMuiImports.push("ThemeProvider");
            base._app.refineMuiImports.push("LightTheme");
            base._app.wrapper.push([
                "<ThemeProvider theme={LightTheme}>",
                "</ThemeProvider>",
            ]);
            base._app.wrapper.push(["<CssBaseline />"]);
            base._app.wrapper.push([
                `<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`,
            ]);
            base._app.wrapper.push([
                "<RefineSnackbarProvider>",
                "</RefineSnackbarProvider>",
            ]);
        }

        base._app.refineMuiImports.push("ReadyPage");
        base._app.refineMuiImports.push("ErrorComponent");
        base._app.refineProps.push("ReadyPage={ReadyPage}");
        base._app.refineProps.push("catchAll={<ErrorComponent />}");

        return base;
    },
};
