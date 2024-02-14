"use client";

import { AuthBindings } from "@refinedev/core";
import { supabaseClient } from "@utility/supabase-client";
import Cookies from "js-cookie";

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
            Cookies.set("token", data.session.access_token, {
                expires: 30, // 30 days
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
        Cookies.remove("token", { path: "/" });
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
    check: async () => {
        const token = Cookies.get("token");
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
        if (error?.code === "PGRST301" || error?.code === 401) {
            return {
                logout: true,
            };
        }

        return { error };
    },
};
