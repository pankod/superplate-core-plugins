const base = {
    _app: {
        refineProps: [
            "Title={Title}",
            "Sider={Sider}",
            "Layout={Layout}",
        ],
        localImport: [
            `import { Title, Sider, Layout } from "components/layout"`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
