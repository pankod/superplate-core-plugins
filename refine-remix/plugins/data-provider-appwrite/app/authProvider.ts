import { AuthProvider } from "@pankod/refine-core";

import { account } from "~/utility";

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        try {
            const user = await account.createEmailSession(email, password);
            return Promise.resolve(user);
        } catch (e) {
            return Promise.reject();
        }
    },
    logout: async () => {
        await account.deleteSession("current");
        return Promise.resolve("/logout");
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
        const session = await account.get();

        if (session) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
        const user = await account.get();

        if (user) {
            return user;
        }
    },
};
