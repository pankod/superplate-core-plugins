import { AuthProvider } from "@pankod/refine-core";
import { AuthHelper } from "@pankod/refine-strapi";
import axios from "axios";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { TOKEN_KEY } from "~/constants";

const strapiAuthProvider = (apiUrl: string) => {
    const axiosInstance = axios.create();

    const strapiAuthHelper = AuthHelper(apiUrl);

    const authProvider: AuthProvider = {
        login: async ({ username, password }) => {
            const { data, status } = await strapiAuthHelper.login(
                username,
                password,
            );
            if (status === 200) {
                // set header axios instance
                axiosInstance.defaults.headers.common = {
                    Authorization: `Bearer ${data.jwt}`,
                };

                Cookies.set(TOKEN_KEY, data.jwt);

                return Promise.resolve(data);
            }
            return Promise.reject();
        },
        logout: () => {
            Cookies.remove(TOKEN_KEY);

            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: async (context) => {
            let token = undefined;
            if (context) {
                const { request } = context;
                const parsedCookie = cookie.parse(
                    request.headers.get("Cookie"),
                );
                token = parsedCookie[TOKEN_KEY];
            } else {
                const parsedCookie = Cookies.get(TOKEN_KEY);
                token = parsedCookie;
            }

            if (token) {
                axiosInstance.defaults.headers.common = {
                    Authorization: `Bearer ${token}`,
                };
                return Promise.resolve();
            }

            return Promise.reject();
        },
        getPermissions: () => Promise.resolve(),
        getUserIdentity: async () => {
            return {};
        },
    };

    return {
        authProvider,
        axiosInstance,
    };
};

export default strapiAuthProvider;
