const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@pankod/refine-supabase";`,
        ],
        localImport: [`import { supabaseClient } from "utility";`],
        relativeImport: [`import authProvider from "./authProvider";`],
        refineProps: [
            "dataProvider={dataProvider(supabaseClient)}",
            "liveProvider={liveProvider(supabaseClient)}",
            "authProvider={authProvider}",
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
    },
};
module.exports = {
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("AuthPage");

            base._app.refineProps.push(`routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        path: "/register",
                        element: <AuthPage type="register" />,
                    },
                    {
                        path: "/forgot-password",
                        element: <AuthPage type="forgotPassword" />,
                    },
                    {
                        path: "/update-password",
                        element: <AuthPage type="updatePassword" />,
                    },
                ],
            }}`);
            base._app.refineProps.push(`LoginPage={() => (
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
            )}`);
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");

            base._app.refineProps.push(`routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        path: "/register",
                        element: <AuthPage type="register" />,
                    },
                    {
                        path: "/forgot-password",
                        element: <AuthPage type="forgotPassword" />,
                    },
                    {
                        path: "/update-password",
                        element: <AuthPage type="updatePassword" />,
                    },
                ],
            }}`);

            base._app.refineProps.push(`LoginPage={() => (
                <AuthPage
                    type="login"
                    providers={[
                        {
                            name: "google",
                            label: "Sign in with Google",
                        },
                    ]}
                    formProps={{
                        defaultValues: {
                            email: "info@refine.dev",
                            password: "refine-supabase",
                        },
                    }}
                />
            )}`);
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");

            base._app.refineProps.push(`routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        path: "/register",
                        element: <AuthPage type="register" />,
                    },
                    {
                        path: "/forgot-password",
                        element: <AuthPage type="forgotPassword" />,
                    },
                    {
                        path: "/update-password",
                        element: <AuthPage type="updatePassword" />,
                    },
                ],
            }}`);
            base._app.refineProps.push(`LoginPage={() => (
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
            )}`);
        }

        if (answers["ui-framework"] === "chakra") {
            base._app.refineChakraImports.push("AuthPage");

            base._app.refineProps.push(`routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        path: "/register",
                        element: <AuthPage type="register" />,
                    },
                    {
                        path: "/forgot-password",
                        element: <AuthPage type="forgotPassword" />,
                    },
                    {
                        path: "/update-password",
                        element: <AuthPage type="updatePassword" />,
                    },
                ],
            }}`);
            base._app.refineProps.push(`LoginPage={() => (
                <AuthPage
                    type="login"
                    providers={[
                        {
                            name: "google",
                            label: "Sign in with Google",
                        },
                    ]}
                    formProps={{
                        defaultValues: {
                            email: "info@refine.dev",
                            password: "refine-supabase",
                        },
                    }}
                />
            )}`);
        }
        return base;
    },
};
