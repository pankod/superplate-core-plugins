import { AuthProvider } from "@pankod/refine-core";
import { AuthHelper } from "@pankod/refine-strapi-v4";

import axios from "axios";
import nookies from "nookies";

import { TOKEN_KEY, API_URL } from "./constants";


export const axiosInstance = axios.create();
const strapiAuthHelper = AuthHelper(API_URL + "/api");

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { data, status } = await strapiAuthHelper.login(
            username,
            password,
        );
        if (status === 200) {
            nookies.set(null, TOKEN_KEY, data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });

            // set header axios instance
            axiosInstance.defaults.headers.common = {
                Authorization: `Bearer ${data.jwt}`,
            };

            return Promise.resolve();
        }
        return Promise.reject();
    },
    logout: () => {
        nookies.destroy(null, TOKEN_KEY);
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: (ctx) => {
        const cookies = nookies.get(ctx);
        if (cookies[TOKEN_KEY]) {
            axiosInstance.defaults.headers.common = {
                Authorization: `Bearer ${cookies[TOKEN_KEY]}`,
            };
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
        const token = nookies.get()[TOKEN_KEY];
        if (!token) {
            return Promise.reject();
        }

        const { data, status } = await strapiAuthHelper.me(token);
        if (status === 200) {
            const { id, username, email } = data;
            return Promise.resolve({
                id,
                username,
                email,
            });
        }

        return Promise.reject();
    },
};