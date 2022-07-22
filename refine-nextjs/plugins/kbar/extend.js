const base = {
    _app: {
        import: [`import { RefineKbarProvider } from "@pankod/refine-kbar";`],
        localImport: [`import { OffLayoutArea } from "components"`],
        wrapper: [
            ["<RefineKbarProvider>", "</RefineKbarProvider>"],
        ],
        refineProps: ["OffLayoutArea={OffLayoutArea}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};

