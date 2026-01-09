const base = {
    _app: {
        localImport: [`import { dataProvider } from "./providers/data";`],
        refineProps: [`dataProvider={dataProvider}`],
    },
    _env: {
        variables: ["VITE_API_URL=https://api.fake-rest.refine.dev"],
    },
    _constants: {
        export: ['export const API_URL = "https://api.fake-rest.refine.dev";'],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
