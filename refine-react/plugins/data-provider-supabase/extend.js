const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@pankod/refine-supabase";`,
        ],
        localImport: [
            `import { supabaseClient } from "utility";`,
        ],
        relativeImport: [`import authProvider from "./authProvider";`],
        refineProps: [
            "dataProvider={dataProvider(supabaseClient)}",
            "liveProvider={liveProvider(supabaseClient)}",
            "authProvider={authProvider}",
            "routerProvider={routerBindings}"
        ],
        refineImports: [
            `Authenticated`
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
        wrapper: [],
        hasLayout: true,
        layoutWrapper: [
            [`<Authenticated
                fallback={
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <AuthPage
                                    type="login"
                                    providers={[
                                        {
                                            name: "google",
                                            label: "Sign in with Google",
                                        },
                                    ]}
                                    formProps={{
                                        initialValues: {
                                            email: "info@refine.dev",
                                            password: "refine-supabase",
                                        },
                                    }}
                                />
                            }
                        />
                        <Route path="/register" element={<AuthPage type="register" />} />
                        <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />
                        <Route path="/update-password" element={<AuthPage type="updatePassword" />} />
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

        if (answers["ui-framework"] === "chakra") {
            base._app.refineChakraImports.push("AuthPage");
        }
        return base;
    },
};
