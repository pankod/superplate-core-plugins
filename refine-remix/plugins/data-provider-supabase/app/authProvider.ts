import type { AuthBindings } from "@refinedev/core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { supabaseClient } from "~/utility";
import { TOKEN_KEY } from "~/constants";

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return {
                success: false,
                error,
            };
        }

        if (data?.session) {
            Cookies.set(TOKEN_KEY, data.session.access_token);
            return {
                success: true,
                redirectTo: "/",
            };
        }

        // for third-party login
        return {
            success: true,
        };
    },
    logout: async () => {
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            return {
                success: false,
                error: {
                    message: error.message,
                    name: "LogoutError",
                },
            };
        }

        Cookies.remove(TOKEN_KEY);
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    register: async ({ email, password }) => {
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
            });
            
            if (error) {
                return {
                    success: false,
                    error,
                };
            }
            
            if (data) {
                return {
                    success: true,
                    redirectTo: "/",
                };
            }
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }
        
        return {
            success: false,
            error: {
                message: "Register failed",
                name: "Invalid email or password",
            },
        };
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async (request) => {
        let token = undefined;
        if (request) {
            const hasCookie = request.headers.get("Cookie");
            if (hasCookie) {
                const parsedCookie = cookie.parse(
                    request.headers.get("Cookie"),
                );
                token = parsedCookie[TOKEN_KEY];
            }
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie ? JSON.parse(parsedCookie) : undefined;
        }

        const { data } = await supabaseClient.auth.getUser(token);
        const { user } = data;

        if (user) {
            return {
                authenticated: true,
            };
        }

        const { pathname } = new URL(request.url);

        return {
            authenticated: false,
            error: {
                message: "Check failed",
                name: "Unauthenticated",
            },
            logout: true,
            redirectTo: `/login?to=${pathname}`,
        };
    },
    getPermissions: async () => {
        const user = await supabaseClient.auth.getUser();

        if (user) {
            return user.data.user?.role;
        }

        return null;
    },
    getIdentity: async () => {
        const { data } = await supabaseClient.auth.getUser();

        if (data?.user) {
            return {
                ...data.user,
                name: data.user.email,
            };
        }

        return null;
    },
};
