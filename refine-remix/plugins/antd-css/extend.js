const base = {
    _app: {
        import: ['import styles from "@pankod/refine-antd/dist/antd.min.css";'],
        afterImport: [
            `export function links() {
            return [{ rel: "stylesheet", href: styles }];
          }`,
        ],
    },
};

module.exports = {
    extend(answers) {
        if (answers["ui-framework"] !== "antd") {
            base._app.afterImport = [];
        }
        return base;
    },
};
