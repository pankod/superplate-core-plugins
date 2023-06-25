import { AppwriteException } from "@refinedev/appwrite";
import { AuthBindings } from "@refinedev/core";
import * as cookie from "cookie";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { account, appwriteClient, TOKEN_KEY } from "./utility";

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        try {
            await account.createEmailSession(email, password);

            const { jwt } = await account.createJWT();

            if (jwt) {
                Cookies.set(TOKEN_KEY, jwt);
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
        Cookies.remove(TOKEN_KEY);
        appwriteClient.setJWT("");

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
    check: async (request) => {
        // for server side authentication
        let token = undefined;
        const hasCookie = request.headers.get("Cookie");
        if (hasCookie) {
            const parsedCookie = cookie.parse(request.headers.get("Cookie"));
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie ? JSON.parse(parsedCookie) : undefined;
        }

        if (token) {
            appwriteClient.setJWT(token);
        }

        const { pathname } = new URL(request.url);
        const query =
            pathname === "/" ? "" : `?to=${encodeURIComponent(pathname)}`;

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
                redirectTo: `/login${query}`,
            };
        }

        return {
            authenticated: false,
            error: {
                message: "Check failed",
                name: "Unauthenticated",
            },
            logout: true,
            redirectTo: `/login${query}`,
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
