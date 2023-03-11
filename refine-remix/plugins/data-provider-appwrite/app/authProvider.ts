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
        } catch (e) {
            return {
                success: false,
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
    onError: async () => {
        return {
            error: new Error("Unauthorized"),
            logout: true,
            redirectTo: "/login",
        };
    },
    check: async (context) => {
        let token = undefined;
        if (context) {
            const { headers } = context;
            const parsedCookie = cookie.parse(headers.get("Cookie") ?? "");
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie;
        }

        if (!token) {
            return {
                authenticated: false,
            };
        }
        appwriteClient.setJWT(token);
        const session = await account.get();

        if (session) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
        };
    },
    getPermissions: async () => ({}),
    getIdentity: async () => {
        const user = await account.get();

        if (user) {
            return user;
        }
    },
};
