const base = {
    _app: {
        refineAntdImports: [],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`]
        ],
        innerHooks: [],
        inner: [],
        localImport: [
            `import { ColorModeContextProvider } from "@contexts";`,
        ],
    },
};

module.exports = {
    extend() {
        module.exports = {
            extend(answers) {
                if (answers["antd-custom-layout"] !== "antd-custom-layout") {
                    base._app.localImport.push(`import { Header } from "components/layout"`)
                    base._app.refineProps.push("Header={Header}")
                }
                return base;
            },
        };

        return base;
    },
};
