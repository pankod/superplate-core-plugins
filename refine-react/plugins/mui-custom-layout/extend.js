const base = {
    _app: {
        refineProps: [
            "Title={Title}",
            "Sider={Sider}",
            "Layout={Layout}",
        ],
        localImport: [],
    },
};

module.exports = {
    extend(answers) {
        if(answers["mui-dark-mode"] === "mui-dark-mode" || answers["i18n"] === "i18n-mui") {
            base._app.localImport.push(`import { Title, Sider, Layout, Header } from "components/layout"`)
            base._app.refineProps.push("Header={Header}")
        } else {
            base._app.localImport.push(`import { Title, Sider, Layout } from "components/layout"`)
        }
        return base;
    },
};
