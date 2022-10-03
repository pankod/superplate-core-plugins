const base = {
    _app: {
        import: [
            `import routerProvider from "@pankod/refine-react-router-v6";`,
        ],
        refineProps: [],
    },
};
module.exports = {
    extend(answers) {
        if (answers["data-provider"] !== "data-provider-supabase") {
            base._app.refineProps.push("routerProvider={routerProvider}");
        }

        return base;
    },
};
