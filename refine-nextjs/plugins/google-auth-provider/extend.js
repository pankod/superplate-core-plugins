const base = {
    _app: {
        refineImports: [`AuthProvider`],
        import: [
            `import axios from "axios";`,
            `import { useGoogleLogout, GoogleLoginResponse } from "react-google-login";`,
        ],
        innerHooks: [
            `const { signOut } = useGoogleLogout({
                clientId: "your-client-id",
                cookiePolicy: "single_host_origin",
            });`,
        ],
        inner: [
            `
            const authProvider: AuthProvider = {
                login: ({ tokenId, profileObj, tokenObj }: GoogleLoginResponse) => {
                    axios.defaults.headers.common = {`,
                        "Authorization: `Bearer ${tokenId}`,",
                    `};
        
                    localStorage.setItem(
                        "user",
                        JSON.stringify({ ...profileObj, avatar: profileObj.imageUrl }),
                    );
                    localStorage.setItem("expiresAt", tokenObj.expires_at.toString());
        
                    return Promise.resolve();
                },
                logout: () => {
                    signOut();
                    localStorage.removeItem("user");
                    localStorage.removeItem("expiresAt");
                    return Promise.resolve();
                },
                checkError: () => Promise.resolve(),
                checkAuth: async () => {
                    const expiresAt = localStorage.getItem("expiresAt");
        
                    if (expiresAt) {
                        return new Date().getTime() / 1000 < +expiresAt
                            ? Promise.resolve()
                            : Promise.reject();
                    }
                    return Promise.reject();
                },
        
                getPermissions: () => Promise.resolve(),
                getUserIdentity: async () => {
                    const user = localStorage.getItem("user");
                    if (user) {
                        return Promise.resolve(JSON.parse(user));
                    }
                },
            };
            `,
        ],
        refineProps: ["authProvider={authProvider}"],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
