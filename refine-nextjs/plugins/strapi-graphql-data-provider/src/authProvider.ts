import { AuthProvider } from "@pankod/refine-core";
import nookies from "nookies";

import { gqlDataProvider, client } from "./gqDataProvider";

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

            nookies.set(null, "token", data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            client.setHeader("Authorization", `Bearer ${data.jwt}`);

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    },
    logout: async () => {
        nookies.destroy(null, "token");
        client.setHeader("Authorization", "");
        return Promise.resolve("/");
    },
    checkError: () => Promise.resolve(),
    checkAuth: (ctx) => {
        const { token } = nookies.get(ctx);

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
