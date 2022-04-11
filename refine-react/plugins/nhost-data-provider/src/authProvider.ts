import { AuthProvider } from "@pankod/refine-core";
import { nhost } from "utility";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { error } = await nhost.auth.signIn({
            email: username,
            password,
        });

        if (error) {
            return Promise.reject(error);
        }

        return Promise.resolve();
    },
    logout: async () => {
        const { error } = await nhost.auth.signOut();
        if (error) {
            return Promise.reject(error);
        }

        return Promise.resolve("/");
    },
    checkError: (error) => {
        if (error.status === 401) {
            return nhost.auth.refreshSession();
        }
        return Promise.reject();
    },
    checkAuth: async () => {
        const isAuthenticated = await nhost.auth.isAuthenticatedAsync();
        if (isAuthenticated) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: () => {
        const user = nhost.auth.getUser();
        if (user) {
            return Promise.resolve(user.roles);
        }

        return Promise.resolve([]);
    },
    getUserIdentity: () => {
        const user = nhost.auth.getUser();
        if (user) {
            return Promise.resolve({
                ...user,
                name: user.displayName,
                avatar: user.avatarUrl,
            });
        }

        return Promise.resolve(null);
    },
};