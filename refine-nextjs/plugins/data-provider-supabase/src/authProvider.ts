import { AuthBindings } from "@refinedev/core";
import nookies from "nookies";

import { supabaseClient } from "./utility";

export const authProvider: AuthBindings = {
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
            return Promise.resolve({
                success: true,
                redirectTo: "/",
            });
        }

        // for third-party login
        return Promise.resolve({
            success: false,
            error: {
                name: "LoginError",
                message: "Invalid username or password",
            },
        });
    },
    logout: async () => {
        nookies.destroy(null, "token");
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            return Promise.resolve({
                success: true,
            });
        }

        return Promise.resolve({
            success: true,
            redirectTo: "/login",
        });
    },
    check: async (ctx) => {
        const { token } = nookies.get(ctx);
        const { data } = await supabaseClient.auth.getUser(token);
        const { user } = data;

        if (user) {
            return Promise.resolve({
                authenticated: true,
            });
        }

        return Promise.resolve({
            authenticated: false,
            redirectTo: "/login",
        });
    },
    getPermissions: async () => {
        const user = await supabaseClient.auth.getUser();

        if (user) {
            return Promise.resolve(user.data.user?.role);
        }
    },
    getIdentity: async () => {
        const { data } = await supabaseClient.auth.getUser();

        if (data?.user) {
            return Promise.resolve({
                ...data.user,
                name: data.user.email,
            });
        }
    },
    onError: async (err) => {
        return Promise.resolve({
            error: {
                name: "LoginError",
                message: err,
            },
            logout: true,
        });
    },
};
