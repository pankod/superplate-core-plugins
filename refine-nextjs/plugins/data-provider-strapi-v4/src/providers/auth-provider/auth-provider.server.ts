import { type AuthProvider } from "@refinedev/core";
import { TOKEN_KEY } from "@utility/constants";
import { cookies } from "next/headers";

export const authProviderServer: Pick<AuthProvider, "check"> = {
    check: async () => {
        const cookieStore = cookies();
        const auth = cookieStore.get(TOKEN_KEY);

        if (auth) {
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
