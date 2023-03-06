const base = {
    _app: {
        import: [`import { DataProvider } from "@pankod/refine-strapi-v4";`],
        relativeImport: [
            `import { authProvider, axiosInstance } from "./authProvider";`,
            `import { API_URL } from "./constants";`,
        ],
        refineProps: [
            "authProvider={authProvider}",
            "dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}",
        ],
        refineImports: [
            `Authenticated`
        ],
        refineAntdImports: [],
        refineMuiImports: [],
        refineMantineImports: [],
        hasLayout: true,
        layoutWrapper: [
            [`<Authenticated
                fallback={
                    <Routes>
                        <Route path="/login" element={<AuthPage type="login" />}/>
                        <Route
                            path="*"
                            element={<Navigate to="/login" />}
                        />
                    </Routes>
                }
            >`, `</Authenticated>`],
        ],
    },
};
module.exports = {
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "antd") {
            base._app.refineMantineImports.push("AuthPage");
        }
        return base;
    },
};
