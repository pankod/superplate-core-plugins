const base = {
    _app: {
        refineProps: [
            "Title={Title}",
            "Header={Header}",
            "Sider={Sider}",
            "Footer={Footer}",
            "Layout={Layout}",
            "OffLayoutArea={OffLayoutArea}",
        ],
        localImport: [
            `import {Title, Header, Sider, Footer, Layout, OffLayoutArea} from "components/layout"`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
