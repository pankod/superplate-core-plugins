import { AuthProvider } from "@pankod/refine-core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { TOKEN_KEY } from "~/constants";

const mockUsers = [
    {
        username: "admin",
        roles: ["admin"],
        token: "admin-token",
    },
    {
        username: "editor",
        roles: ["editor"],
        token: "editor-token",
    },
];

export const authProvider: AuthProvider = {
    login: ({ username, password, remember }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers.find((item) => item.username === username);

        if (user) {
            // Suppose we actually send a request to the back end here.
            Cookies.set(TOKEN_KEY, user.token);

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
            const parsedCookie = cookie.parse(request.headers.get("Cookie"));
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
