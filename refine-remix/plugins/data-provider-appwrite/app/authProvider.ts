import { AuthProvider } from "@pankod/refine-core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { account, TOKEN_KEY } from "~/utility";

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        try {
            const user = await account.createEmailSession(email, password);

            // TODO: fix
            Cookies.set(TOKEN_KEY, user.token);

            return Promise.resolve(user);
        } catch (e) {
            return Promise.reject();
        }
    },
    logout: async () => {
        Cookies.remove(TOKEN_KEY);
        await account.deleteSession("current");
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async (context) => {
        let token = undefined;
        if (context) {
            const { request } = context;
            const parsedCookie = cookie.parse(request.headers.get("Cookie"));
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie;
        }

        // TODO: fix

        const session = await account.get();

        if (session) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
        const user = await account.get();

        if (user) {
            return user;
        }
    },
};
