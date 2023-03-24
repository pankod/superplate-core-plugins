import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // !!! Should be stored in .env file.
        Auth0Provider({
            clientId: `Be5vsLunFvpzPf4xfXtaMxrZUVBjjNPO`,
            clientSecret: `08F9X84FvzpsimV16CQvlQuwJOlqk-GqQgEdcq_3xzrn1K3UHnTCcRgMCwBW7api`,
            issuer: `https://dev-qg1ftdys736bk5i3.us.auth0.com`,
        }),
    ],
    secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};
export default NextAuth(authOptions);
