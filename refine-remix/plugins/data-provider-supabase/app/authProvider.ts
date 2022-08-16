import type { AuthProvider } from "@pankod/refine-core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { supabaseClient } from "~/utility";
import { TOKEN_KEY } from "~/constants";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { user, error, session } = await supabaseClient.auth.signIn({
            email: username,
            password,
        });

        if (error) {
            return Promise.reject(error);
        }

        if (user && session) {
            Cookies.set(TOKEN_KEY, session.access_token);
            return Promise.resolve();
        }
    },
    logout: async () => {
        await supabaseClient.auth.signOut();
        Cookies.remove(TOKEN_KEY);

        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async (context) => {
        let token = undefined;
        if (context) {
            const { request } = context;
            const parsedCookie = cookie.parse(request.headers.get("Cookie"));
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie;
        }

        const { data: user } = await supabaseClient.auth.api.getUser(token);

        if (user) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: async () => {
        const user = supabaseClient.auth.user();

        if (user) {
            return Promise.resolve(user.role);
        }
    },
    getUserIdentity: async () => {
        const user = supabaseClient.auth.user();

        if (user) {
            return Promise.resolve({
                ...user,
                name: user.email,
            });
        }
    },
};
