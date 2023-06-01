const base = {
    _app: {
        import: [
            `import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";`,
            `import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";`
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
