const base = {
    _app: {
        refineChakraImports: [],
        wrapper: [],
        innerHooks: [],
        inner: [],
    },
};

module.exports = {
    extend() {
        module.exports = {
            extend(answers) {
                if(answers["chakra-custom-layout"] !== "chakra-custom-layout") {
                    base._app.localImport.push(`import { Header } from "~/components/layout"`)
                    base._app.refineProps.push("Header={Header}")
                }
                return base;
            },
        };
        
        return base;
    },
};
