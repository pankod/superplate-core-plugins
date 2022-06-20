const base = {
    _app: {
        refineProps: [
            "Title={Title}",
            "Sider={Sider}",
            "Layout={Layout}",
            "Header={Header}"
        ],
        localImport: [`import { Title, Sider, Layout, Header } from "components/layout"`],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
