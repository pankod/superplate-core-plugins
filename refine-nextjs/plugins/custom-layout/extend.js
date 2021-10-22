const base = {
    _app: {
        refineProps: [
            "Title={Title}",
            "Header={Header}",
            "Sider={Sider}",
            "Footer={Footer}",
            "Layout={Layout}",
            "OffLayoutArea={OffLayoutArea}"
        ],
        import: [
            `import {Title, Header, Sider, Footer, Layout, OffLayoutArea} from "src/components"`
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
