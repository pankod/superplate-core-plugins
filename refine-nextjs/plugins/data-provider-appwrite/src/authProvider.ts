import { AuthBindings } from "@refinedev/core";
import { AppwriteException } from "@refinedev/appwrite";
import nookies from "nookies";

import { account, appwriteClient, APPWRITE_TOKEN_KEY } from "./utility";

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        try {
            await account.createEmailSession(email, password);
            const { jwt } = await account.createJWT();

            if (jwt) {
                nookies.set(null, APPWRITE_TOKEN_KEY, jwt, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: "/",
                });
            }

            return {
                success: true,
                redirectTo: "/",
            };
        } catch (error) {
            const { type, message, code } = error as AppwriteException;
            return {
                success: false,
                error: {
                    message,
                    name: `${code} - ${type}`,
                },
            };
        }
    },
    logout: async () => {
        try {
            await account.deleteSession("current");
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }
        nookies.destroy(null, APPWRITE_TOKEN_KEY);
        appwriteClient.setJWT(undefined);
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async (ctx) => {
        // for server side authentication
        const cookies = nookies.get(ctx);
        const appwriteJWT = cookies[APPWRITE_TOKEN_KEY];
        if (appwriteJWT) {
            appwriteClient.setJWT(appwriteJWT);
        }

        try {
            const session = await account.get();

            if (session) {
                return {
                    authenticated: true,
                };
            }
        } catch (error: any) {
            return {
                authenticated: false,
                error: error,
                logout: true,
                redirectTo: "/login",
            };
        }

        return {
            authenticated: false,
            error: new Error("Session not found"),
            logout: true,
            redirectTo: "/login",
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
