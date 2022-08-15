import type { AuthProvider } from "@pankod/refine-core";

import { supabaseClient } from "./utility";

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
            return Promise.resolve({ ...user, token: session.access_token });
        }
    },
    logout: async () => {
        await supabaseClient.auth.signOut();

        return "/logout";
    },
    checkError: () => Promise.resolve(),
    checkAuth: async ({ request, storage }) => {
        const session = await storage.getSession(request.headers.get("Cookie"));
        const {
            user: { token },
        } = session.get("user");

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
