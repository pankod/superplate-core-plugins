import type { AuthProvider } from "@refinedev/core";
import { API_URL, TOKEN_KEY } from "@utility/constants";
import { cookies } from "next/headers";

export const authProviderServer: Pick<AuthProvider, "check"> = {
    check: async () => {
        const cookieStore = cookies();
        const token = cookieStore.get(TOKEN_KEY);
        const url = new URL("/api/users/me", API_URL);

        if (!token) {
            return {
                authenticated: false,
                redirectTo: "/login",
            };
        }

        try {
            const response = await fetch(url.href, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.value}`,
                },
                cache: "no-cache",
            });
            const data = await response.json();
            if (data.error || !response.ok) {
                return {
                    authenticated: false,
                    redirectTo: "/login",
                    error: data.error,
                };
            }

            return {
                authenticated: true,
            };
        } catch (error) {
            return {
                authenticated: false,
                redirectTo: "/login",
                error: error,
            };
        }
    },
};
