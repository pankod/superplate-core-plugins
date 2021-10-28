import { AuthProvider } from "@pankod/refine";
import nookies from "nookies";

import { supabaseClient } from "./utility";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { user, error, data } = await supabaseClient.auth.signIn({
            email: username,
            password,
        });

        if (error) {
            return Promise.reject(error);
        }

        if (user && data) {
            nookies.set(null, "token", data.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            return Promise.resolve();
        }
    },
    logout: async () => {
        nookies.destroy(null, "token");
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            return Promise.reject(error);
        }

        return Promise.resolve("/");
    },
    checkError: () => Promise.resolve(),
    checkAuth: async (ctx) => {
        const { token } = nookies.get(ctx);
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