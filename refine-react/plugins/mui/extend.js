const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [],
        refineMuiImports: [
            "notificationProvider", 
            "RefineSnackbarProvider", 
            "ThemeProvider", 
            "LightTheme", 
            "CssBaseline", 
            "GlobalStyles"
        ],
        wrapper: [
            ["<ThemeProvider theme={LightTheme}>", "</ThemeProvider>"], 
            ["<CssBaseline />"],
            [`<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />`],
            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
    },
};

module.exports = {
    extend(answers) {
        if (answers["mui-custom-layout"] === "no") {
            base._app.refineMuiImports.push("Layout");
            base._app.refineProps.push("Layout={Layout}");
        }

        base._app.refineMuiImports.push("ReadyPage");
        base._app.refineMuiImports.push("ErrorComponent");
        base._app.refineProps.push("ReadyPage={ReadyPage}");
        base._app.refineProps.push("catchAll={<ErrorComponent />}");
        return base;
    },
};
