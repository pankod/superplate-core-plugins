import { AuthBindings } from "@refinedev/core";
import { AuthHelper } from "@refinedev/strapi-v4";
import axios from "axios";
import nookies from "nookies";
import { API_URL, TOKEN_KEY } from "./constants";

export const axiosInstance = axios.create();
const strapiAuthHelper = AuthHelper(API_URL + "/api");

axiosInstance.interceptors.request.use((config) => {
    const cookies = nookies.get();
    if (cookies[TOKEN_KEY] && config.headers) {
        config.headers["Authorization"] = `Bearer ${cookies[TOKEN_KEY]}`;
    }
    return config;
});

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        const { data, status } = await strapiAuthHelper.login(email, password);
        if (status === 200) {
            nookies.set(null, TOKEN_KEY, data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });

            // set header axios instance
            axiosInstance.defaults.headers.common = {
                Authorization: `Bearer ${data.jwt}`,
            };

            return {
                success: true,
                redirectTo: "/",
            };
        }
        return {
            success: false,
            error: {
                message: "Login failed",
                name: "Invalid email or password",
            },
        };
    },
    logout: async () => {
        nookies.destroy(null, TOKEN_KEY);
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    check: async (ctx) => {
        const cookies = nookies.get(ctx);
        if (cookies[TOKEN_KEY]) {
            axiosInstance.defaults.headers.common = {
                Authorization: `Bearer ${cookies[TOKEN_KEY]}`,
            };
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const token = nookies.get()[TOKEN_KEY];
        if (!token) {
            return null;
        }

        const { data, status } = await strapiAuthHelper.me(token);
        if (status === 200) {
            const { id, username, email } = data;
            return {
                id,
                name: username,
                email,
            };
        }

        return null;
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
};
