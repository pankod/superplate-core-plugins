import { AppwriteException } from "@refinedev/appwrite";
import { AuthBindings } from "@refinedev/core";
import { v4 as uuidv4 } from "uuid";
import { account } from "./utility";

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        try {
            await account.createEmailSession(email, password);
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

        return {
            success: true,
            redirectTo: "/login",
        };
    },
    register: async ({ email, password }) => {
        try {
            await account.create(uuidv4(), email, password);
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
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async () => {
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
        const user = await account.get();

        if (user) {
            return user;
        }

        return null;
    },
};
