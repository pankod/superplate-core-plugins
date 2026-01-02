const base = {
    _app: {
        localImport: [`import { dataProvider } from "./providers/data";`],
        refineProps: [`dataProvider={dataProvider}`],
    },
    _constants: {
        export: [
            'export const API_URL = import.meta.env.VITE_API_URL || "https://api.fake-rest.refine.dev";',
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
