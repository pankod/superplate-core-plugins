import { AuthProvider } from "@pankod/refine-core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { TOKEN_KEY } from "~/constants";

export const authProvider: AuthProvider = {
    login: async ({ username, email, password }) => {
        if ((username || email) && password) {
            Cookies.set(TOKEN_KEY, `${username}-${email}`);
            return Promise.resolve();
        }
        return Promise.reject();
    },
    logout: () => {
        Cookies.remove(TOKEN_KEY);
        return Promise.resolve();
    },
    checkError: (error) => {
        if (error && error.statusCode === 401) {
            return Promise.reject();
        }

        return Promise.resolve();
    },
    checkAuth: (context) => {
        let token = undefined;
        if (context) {
            const { request } = context;
            const parsedCookie = cookie.parse(
                request.headers.get("Cookie") ?? "",
            );
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie;
        }

        if (token) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: async () => {
        return Promise.resolve();
    },
    getUserIdentity: async () => {
        return Promise.resolve();
    },
};
