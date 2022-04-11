const base = {
    _app: {
        import: [
            `import dataProvider from "@pankod/refine-nhost";`,
            `import { authProvider } from "./authProvider";`,
            `import { NhostAuthProvider } from "@nhost/react-auth";`,
            "",
            `import { nhost } from "utility";`,
            
        ],
        refineProps: [
            "dataProvider={dataProvider(nhost)}" , 
            "authProvider={authProvider}" 
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
