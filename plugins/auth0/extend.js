const base = {
    _app: {
        import: [
            'import { UserProvider } from "@auth0/nextjs-auth0";'
        ],
        inner: ["const { user } = pageProps;"],
        wrapper: [
            ["<UserProvider user={user}>", "</UserProvider>"],
        ],
    },
    testSetup: {
        import: [
            'import { UserProvider } from "@auth0/nextjs-auth0";'
        ],
        inner: ["const { user } = pageProps;"],
        wrapper: [
            ["<UserProvider user={user}>", "</UserProvider>"],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
