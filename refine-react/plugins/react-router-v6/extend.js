const base = {
    _app: {
        import: [
            `import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";`,
            `import routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";`
        ],
        refineProps: [],
    },
};
module.exports = {
    extend(answers) {
        if (answers["data-provider"] !== "data-provider-supabase") {
            base._app.refineProps.push("routerProvider={routerBindings}");
        }

        return base;
    },
};
