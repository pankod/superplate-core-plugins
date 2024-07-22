"use client";

import { AppwriteException } from "@refinedev/appwrite";
import type { AuthProvider } from "@refinedev/core";
import { appwriteAccount, appwriteClient } from "@utils/appwrite/client";
import { APPWRITE_JWT_KEY } from "@utils/constants";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export const authProviderClient: AuthProvider = {
    login: async ({ email, password }) => {
        try {
            Cookies.remove(APPWRITE_JWT_KEY, { path: "/" });
            appwriteClient.setJWT("");

            await appwriteAccount.createEmailPasswordSession(email, password);
            const { jwt } = await appwriteAccount.createJWT();
            appwriteClient.setJWT(jwt);

            if (jwt) {
                Cookies.set(APPWRITE_JWT_KEY, jwt, {
                    expires: 30, // 30 days
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
            await appwriteAccount.deleteSessions();
        } catch (error) {}

        Cookies.remove(APPWRITE_JWT_KEY, { path: "/" });
        appwriteClient.setJWT("");
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    register: async ({ email, password }) => {
        try {
            await appwriteAccount.create(uuidv4(), email, password);
            return {
                success: true,
                redirectTo: "/login",
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
    onError: async (error: AppwriteException) => {
        if (error.code === 401) {
            return { logout: true, redirectTo: "/login", error };
        }
        return { error };
    },
    check: async () => {
        const appwriteJWT = Cookies.get(APPWRITE_JWT_KEY);
        if (appwriteJWT) {
            appwriteClient.setJWT(appwriteJWT);
        }

        try {
            const session = await appwriteAccount.get();

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
            error: {
                message: "Check failed",
                name: "Session not found",
            },
            logout: true,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const user = await appwriteAccount.get();

        if (user) {
            return user;
        }

        return null;
    },
};
