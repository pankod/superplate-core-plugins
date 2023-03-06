import { AuthBindings } from "@pankod/refine-core";
import { AuthHelper } from "@pankod/refine-strapi-v4";

import { TOKEN_KEY, API_URL } from "./constants";

import axios from "axios";

export const axiosInstance = axios.create();
const strapiAuthHelper = AuthHelper(API_URL + "/api");

export const authProvider: AuthBindings = {
    login: async ({ username, password }) => {
        const { data, status } = await strapiAuthHelper.login(
            username,
            password,
        );
        if (status === 200) {
            localStorage.setItem(TOKEN_KEY, data.jwt);

            // set header axios instance
            axiosInstance.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${data.jwt}`;

            return {
                success: true,
                redirectTo: "/",
            };
        }
        return {
            success: false,
            error: new Error("Invalid username or password"),
        };
    },
    logout: async () => {
        localStorage.removeItem(TOKEN_KEY);
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async () => ({}),
    check: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            axiosInstance.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            error: new Error("Not authenticated"),
            logout: true,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            return null;
        }

        const { data, status } = await strapiAuthHelper.me(token);
        if (status === 200) {
            const { id, username, email } = data;
            return {
                id,
                username,
                email,
            };
        }

        return null;
    },
};