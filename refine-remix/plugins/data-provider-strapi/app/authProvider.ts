import { AuthProvider } from "@pankod/refine-core";
import { AuthHelper } from "@pankod/refine-strapi";
import axios from "axios";

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

                return Promise.resolve(data);
            }
            return Promise.reject();
        },
        logout: async () => {
            return "/logout";
        },
        checkError: () => Promise.resolve(),
        checkAuth: async ({ request, storage }) => {
            const session = await storage.getSession(
                request.headers.get("Cookie"),
            );
            const {
                user: { token },
            } = session.get("user");

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
