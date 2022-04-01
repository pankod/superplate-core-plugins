const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [],
        refineAntdImports: ["notificationProvider"],
    },
};

module.exports = {
    extend(answers) {
        if (answers["custom-layout"] === "no") {
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
