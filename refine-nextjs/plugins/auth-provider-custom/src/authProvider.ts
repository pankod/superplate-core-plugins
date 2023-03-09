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
    login: ({ email, username, password, remember }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers[0];

        if (user) {
            nookies.set(null, "auth", JSON.stringify(user), {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
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
        nookies.destroy(null, "auth");
        return Promise.resolve({
            success: true,
            redirectTo: "/login",
        });
    },
    check: (ctx: any) => {
        const cookies = nookies.get(ctx);
        if (cookies["auth"]) {
            return Promise.resolve({
                authenticated: true,
            });
        }

        return Promise.resolve({
            authenticated: false,
            redirectTo: "/login",
        });
    },
    getPermissions: () => {
        const auth = nookies.get()["auth"];
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.roles);
        }
        return Promise.resolve(null);
    },
    getIdentity: () => {
        const auth = nookies.get()["auth"];
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser);
        }
        return Promise.resolve(null);
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
