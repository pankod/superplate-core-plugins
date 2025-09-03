import type { AuthProvider } from "@refinedev/core";
import { createSupabaseServerClient } from "@utils/supabase/server";

export const authProviderServer: Pick<AuthProvider, "check"> = {
    check: async () => {
        const client = await createSupabaseServerClient();
        const { data, error } = await client.auth.getUser();
        const { user } = data;

        if (error) {
            return {
                authenticated: false,
                logout: true,
                redirectTo: "/login",
            };
        }

        if (user) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            logout: true,
            redirectTo: "/login",
        };
    },
};
