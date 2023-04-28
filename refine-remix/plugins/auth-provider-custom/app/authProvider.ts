import type { AuthBindings } from "@refinedev/core";
import * as cookie from "cookie";
import Cookies from "js-cookie";

const mockUsers = [
    {
        name: "John Doe",
        email: "admin@refine.dev",
        roles: ["admin"],
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Jane Doe",
        email: "editor@refine.dev",
        roles: ["editor"],
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "John Doe",
        email: "demo@refine.dev",
        roles: ["admin"],
        avatar: "https://i.pravatar.cc/150?img=1",
    },
];

const COOKIE_NAME = "user";

export const authProvider: AuthBindings = {
    login: async ({ email }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers.find((item) => item.email === email);

        if (user) {
            Cookies.set(COOKIE_NAME, JSON.stringify(user));
            return {
                success: true,
                redirectTo: "/",
            };
        }

        return {
            success: false,
            error: {
                message: "Login failed",
                name: "Invalid email or password",
            },
        };
    },
    logout: async () => {
        Cookies.remove(COOKIE_NAME);

        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async (request) => {
        let user = undefined;
        if (request) {
            const hasCookie = request.headers.get("Cookie");
            if (hasCookie) {
                const parsedCookie = cookie.parse(
                    request.headers.get("Cookie"),
                );
                user = parsedCookie[COOKIE_NAME];
            }
        } else {
            const parsedCookie = Cookies.get(COOKIE_NAME);
            user = parsedCookie ? JSON.parse(parsedCookie) : undefined;
        }

        const { pathname } = new URL(request.url);

        if (!user) {
            return {
                authenticated: false,
                error: {
                    message: "Check failed",
                    name: "Unauthenticated",
                },
                logout: true,
                redirectTo: `/login?to=${pathname}`,
            };
        }

        return {
            authenticated: true,
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const parsedCookie = Cookies.get(COOKIE_NAME);
        if (parsedCookie) {
            const user = parsedCookie ? JSON.parse(parsedCookie) : undefined;
            return user;
        }
        return null;
    },
};
