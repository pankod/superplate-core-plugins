const base = {
    _app: {
        import: [
            `import dataProvider from "@refinedev/nhost";`,
            `import { NhostAuthProvider } from "@nhost/react-auth";`,
        ],
        localImport: [`import { nhost } from "utility";`],
        relativeImport: [`import { authProvider } from "./authProvider";`],
        refineProps: [
            "legacyRouterProvider={dataProvider(nhost)}",
            "authProvider={authProvider}",
        ],
        refineImports: [
            `Authenticated`
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        wrapper: [
            ["<NhostAuthProvider nhost={nhost}>", "</NhostAuthProvider>"],
        ],
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

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
        }
        return base;
    },
};
