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
            return {
                success: false,
                error,
            }
        }

        if (data?.session) {
            nookies.set(null, "token", data.session.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });

            return {
                success: true,
                redirectTo: "/",
            };
        }

        // for third-party login
        return {
            success: false,
            error: {
                name: "LoginError",
                message: "Invalid username or password",
            },
        };
    },
    logout: async () => {
        nookies.destroy(null, "token");
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
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
    check: async (ctx) => {
        const { token } = nookies.get(ctx);
        const { data } = await supabaseClient.auth.getUser(token);
        const { user } = data;

        if (user) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            redirectTo: "/login",
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
    onError: async (error) => {
        console.error(error);
        return { error };
    },
};
