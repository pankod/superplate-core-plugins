import { AuthBindings } from "@refinedev/core";

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
    login: async ({ username, email, password }) => {
        if ((username || email) && password) {
            localStorage.setItem(TOKEN_KEY, username);
            return Promise.resolve({
                success: true,
                redirectTo: "/",
            });
        }

        return Promise.resolve({
            success: false,
            error: {
                name: "LoginError",
                message: "Invalid username or password",
            },
        });
    },
    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        return Promise.resolve({
            success: true,
        });
    },
    check: () => {
        const token = localStorage.getItem(TOKEN_KEY);
        const authenticated = !!token;
        return Promise.resolve({
            authenticated,
        });
    },
    getPermissions: () => Promise.resolve(),
    getIdentity: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            return Promise.resolve({
                id: 1,
                name: "John Doe",
                avatar: "https://i.pravatar.cc/300",
            });
        }
    },
    onError: (err) => {
        console.log(err);
        return Promise.resolve({
            error: {
                name: "LoginError",
                message: err,
            },
            logout: true,
        });
    },
};
