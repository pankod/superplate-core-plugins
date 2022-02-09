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
        return base;
    },
};
