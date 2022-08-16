import { AuthProvider } from "@pankod/refine-core";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import { gqlDataProvider, client } from "./gqDataProvider";
import { TOKEN_KEY } from "~/constants";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        try {
            const { data } = await gqlDataProvider.custom!({
                url: "",
                method: "post",
                metaData: {
                    operation: "login",
                    variables: {
                        input: {
                            value: { identifier: username, password },
                            type: "UsersPermissionsLoginInput",
                            required: true,
                        },
                    },
                    fields: ["jwt"],
                },
            });

            Cookies.set(TOKEN_KEY, data.jwt);
            client.setHeader("Authorization", `Bearer ${data.jwt}`);

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    logout: async () => {
        Cookies.remove(TOKEN_KEY);
        client.setHeader("Authorization", "");
        return Promise.resolve("/");
    },
    checkError: () => Promise.resolve(),
    checkAuth: (context) => {
        let token = undefined;
        if (context) {
            const { request } = context;
            const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "");
            token = parsedCookie[TOKEN_KEY];
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie;
        }

        if (!token) {
            return Promise.reject();
        }

        client.setHeader("Authorization", `Bearer ${token}`);

        return Promise.resolve();
    },
    getPermissions: async () => {
        try {
            const { data } = await gqlDataProvider.custom!({
                url: "",
                method: "get",
                metaData: {
                    operation: "me",
                    fields: [
                        {
                            role: ["name", "description", "type"],
                        },
                    ],
                },
            });
            const { role } = data;

            return Promise.resolve(role);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getUserIdentity: async () => {
        try {
            const { data } = await gqlDataProvider.custom!({
                url: "",
                method: "get",
                metaData: {
                    operation: "me",
                    fields: ["id", "username", "email"],
                },
            });
            const { id, username, email } = data;
            return Promise.resolve({
                id,
                name: username,
                email,
            });
        } catch (error) {
            return Promise.reject(error);
        }
    },
};
