const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [],
        refineAntdImports: ["notificationProvider", "ConfigProvider", "theme"],
        wrapper: [
            [`<ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>`, "</ConfigProvider>"],
        ]
    },
};

module.exports = {
    extend(answers) {
        if (answers["antd-custom-layout"] === "no") {
            base._app.refineAntdImports.push("Layout");
            base._app.refineProps.push("Layout={Layout}");
        }

        base._app.refineAntdImports.push("ReadyPage");
        base._app.refineAntdImports.push("ErrorComponent");
        base._app.refineProps.push("ReadyPage={ReadyPage}");
        base._app.refineProps.push("catchAll={<ErrorComponent />}");
        return base;
    },
};
