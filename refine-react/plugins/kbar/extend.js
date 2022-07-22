const base = {
    _app: {
        import: [`import { RefineKbarProvider } from "@pankod/refine-kbar";`],
        localImport: [`import { OffLayoutArea } from "components/offLayoutArea"`],
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
