import type { AuthProvider } from "@refinedev/core";
import { getSessionClient } from "@utils/appwrite/server";

export const authProviderServer: Pick<AuthProvider, "check"> = {
    check: async () => {
        try {
            const client = await getSessionClient();
            await client.account.get();

            return {
                authenticated: true,
            };
        } catch (error: any) {
            return {
                authenticated: false,
                logout: true,
                redirectTo: "/login",
                error,
            };
        }
    },
};
