import type { AuthBindings } from "@refinedev/core";
import { AuthHelper } from "@refinedev/strapi-v4";
import axios from "axios";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { TOKEN_KEY, API_URL } from "~/constants";

export const axiosInstance = axios.create();
const strapiAuthHelper = AuthHelper(API_URL + "/api");

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        const { data, status } = await strapiAuthHelper.login(
            email,
            password,
        );
        if (status === 200) {
            Cookies.set(TOKEN_KEY, data.jwt);

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
        };
    },
    logout: async () => {
        Cookies.remove(TOKEN_KEY);
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async () => {
        return {
            error: new Error("Unauthorized"),
            logout: true,
            redirectTo: "/login",
        };
    },
    check: (context) => {
        let token = undefined;
        if (context) {
            const { headers } = context;
            const parsedCookie = cookie.parse(headers.get("Cookie") ?? "");
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie;
        }

        if (token) {
            axiosInstance.defaults.headers.common = {
                Authorization: `Bearer ${token}`,
            };
            return {
                authenticated: true
            };
        }

        return {
            authenticated: false
        };
    },
    getPermissions: () => Promise.resolve(),
    getIdentity: async () => {
        const token = Cookies.get(TOKEN_KEY);
        const { data, status } = await strapiAuthHelper.me(token);
        if (status === 200) {
            const { id, username, email } = data;
            return {
                id,
                name: username,
                email,
            };
        }
    },
};
