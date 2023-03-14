import type { AuthBindings } from "@refinedev/core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { account, appwriteClient, TOKEN_KEY } from "~/utility";

export const authProvider: AuthBindings = {
    login: async ({ email, password }: any) => {
        try {
            const user = await account.createEmailSession(email, password);
            Cookies.set(TOKEN_KEY, user.providerAccessToken);

            return {
                success: true,
                redirectTo: "/",
            };
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }
    },
    logout: async () => {
        Cookies.remove(TOKEN_KEY);
        await account.deleteSession("current");
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async (request) => {
        let token = undefined;
        if (request) {
            const hasCookie = request.headers.get("Cookie");
            if (hasCookie) {
                const parsedCookie = cookie.parse(
                    request.headers.get("Cookie"),
                );
                token = parsedCookie[TOKEN_KEY];
            }
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie ? JSON.parse(parsedCookie) : undefined;
        }

        if (!token) {
            return {
                authenticated: false,
                redirectTo: "/login"
            };
        }
        appwriteClient.setJWT(token);
        const session = await account.get();

        if (session) {
            return {
                authenticated: true,
            };
        }

        const { pathname } = new URL(request.url);

        return {
            authenticated: false,
            error: new Error("Unauthenticated"),
            logout: true,
            redirectTo: `/login?to=${pathname}`,
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const user = await account.get();

        if (user) {
            return user;
        }

        return null;
    },
};
