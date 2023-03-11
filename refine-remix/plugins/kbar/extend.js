const base = {
    _app: {
        import: [`import { RefineKbarProvider } from "@refinedev/kbar";`],
        localImport: [
            `import { OffLayoutArea } from "~/components/offLayoutArea"`,
        ],
        wrapper: [["<RefineKbarProvider>", "</RefineKbarProvider>"]],
        refineProps: ["OffLayoutArea={OffLayoutArea}"],
    },
};

module.exports = {
    extend(answers) {
        if (
            answers["ui-framework"] === "antd"
        ) {
            base._app.refineProps = [];
            base._app.localImport = [];
        }
        return base;
    },
};
