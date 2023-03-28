const base = {
    _app: {
        localImport: [
            `import type { LoaderArgs } from "@remix-run/node";`,
            `import { json } from "@remix-run/node";`,
            `import { authenticator } from "~/utils/auth.server";`
        ],
        refineProps: ["authProvider={authProvider}"],
        refineImports: [`AuthBindings`],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
        loader: [
            `export const loader = async ({ request }: LoaderArgs) => {
                const profile = await authenticator.isAuthenticated(request);
                const to = new URL(request.url).searchParams.get("to");
                return json({ profile, to });
            };`
        ],
        inner: [
            `
            const { profile, to } = useLoaderData<typeof loader>();
            const authProvider: AuthBindings = {
                login: async ({ providerName }) => {
                    if (providerName) {`,
            "window.location.href = `/auth/${providerName} ? to = ${to}`;",
            `return {
                            success: true,
                        };
                    }

                    return {
                        success: true,
                        redirectTo: "/",
                    };
                },
                logout: async () => {
                    window.location.href = "/auth/logout";
                    return {
                        success: true,
                    };
                },
                onError: async (error) => {
                    console.error(error);
                    return {
                        error,
                    };
                },
                check: async () => {
                    return {
                        authenticated: !!profile,
                    };
                },
                getPermissions: async () => {
                    return null;
                },
                getIdentity: async () => {
                    if (profile) {
                        return profile;
                    }

                    return null;
                },
            };`
        ]
    },
};

module.exports = {
    extend() {
        return base;
    },
};
