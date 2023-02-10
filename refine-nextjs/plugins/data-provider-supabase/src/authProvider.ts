import { AuthProvider } from "@pankod/refine-core";
import nookies from "nookies";

import { supabaseClient } from "./utility";

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return Promise.reject(error);
        }

        if (data?.session) {
            nookies.set(null, "token", data.session.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            return Promise.resolve();
        }

        // for third-party login
        return Promise.resolve(false);
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
        const { data } = await supabaseClient.auth.getUser(token);
        const { user } = data;

        if (user) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: async () => {
        const user = await supabaseClient.auth.getUser();

        if (user) {
            return Promise.resolve(user.data.user?.role);
        }
    },
    getUserIdentity: async () => {
        const { data } = await supabaseClient.auth.getUser();

        if (data?.user) {
            return Promise.resolve({
                ...data.user,
                name: data.user.email,
            });
        }
    },
};
