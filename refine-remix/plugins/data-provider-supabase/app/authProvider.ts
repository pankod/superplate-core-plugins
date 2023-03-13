import type { AuthBindings } from "@refinedev/core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { supabaseClient } from "~/utility";
import { TOKEN_KEY } from "~/constants";

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return {
                success: false,
            };
        }

        if (data?.session) {
            Cookies.set(TOKEN_KEY, data.session.access_token);
            return {
                success: true,
                redirectTo: "/",
            };
        }

        // for third-party login
        return {
            success: true,
        };
    },
    logout: async () => {
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            return {
                success: false,
                error: {
                    message: error.message,
                    name: "LogoutError",
                },
            };
        }

        Cookies.remove(TOKEN_KEY);
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async (context) => {
        let token = undefined;
        if (context && context.headers) {
            const { headers } = context;
            const parsedCookie = cookie.parse(headers.get("Cookie") ?? "");
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie;
        }
        const { data } = await supabaseClient.auth.getUser(token);
        const { user } = data;

        if (user) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => {
        const user = await supabaseClient.auth.getUser();

        if (user) {
            return user.data.user?.role;
        }

        return null;
    },
    getIdentity: async () => {
        const { data } = await supabaseClient.auth.getUser();

        if (data?.user) {
            return {
                ...data.user,
                name: data.user.email,
            };
        }

        return null;
    },
};
