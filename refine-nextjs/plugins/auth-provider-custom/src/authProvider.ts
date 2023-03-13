import { AuthBindings } from "@refinedev/core";
import nookies from "nookies";

const mockUsers = [
    {
        name: "John Doe",
        email: "johndoe@mail.com",
        roles: ["admin"],
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Jane Doe",
        email: "janedoe@mail.com",
        roles: ["editor"],
        avatar: "https://i.pravatar.cc/150?img=1",
    },
];

export const authProvider: AuthBindings = {
    login: async ({ email, username, password, remember }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers[0];

        if (user) {
            nookies.set(null, "auth", JSON.stringify(user), {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            return {
                success: true,
                redirectTo: "/",
            };
        }

        return {
            success: false,
            error: {
                name: "LoginError",
                message: "Invalid username or password",
            },
        };
    },
    logout: async () => {
        nookies.destroy(null, "auth");
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    check: async (ctx: any) => {
        const cookies = nookies.get(ctx);
        if (cookies["auth"]) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            logout: true,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => {
        const auth = nookies.get()["auth"];
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return parsedUser.roles;
        }
        return null;
    },
    getIdentity: async () => {
        const auth = nookies.get()["auth"];
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return parsedUser;
        }
        return null;
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
};
