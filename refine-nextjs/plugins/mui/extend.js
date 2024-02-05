const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        refineMuiImports: ["notificationProvider", "RefineSnackbarProvider"],
        wrapper: [
            [
                "<ColorModeContextProvider defaultMode={defaultMode}>",
                "</ColorModeContextProvider>",
            ],

            ["<RefineSnackbarProvider>", "</RefineSnackbarProvider>"],
        ],
        import: [],
        localImport: [
            'import { ColorModeContextProvider } from "@contexts/color-mode";',
            'import { Header } from "@components/header";',
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
