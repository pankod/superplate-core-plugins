import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // !!! Should be stored in .env file.
        KeycloakProvider({
            clientId: `refine-demo`,
            clientSecret: `refine`,
            issuer: `https://lemur-0.cloud-iam.com/auth/realms/refine`,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name ?? profile.preferred_username,
                    email: profile.email,
                    image: `https://faces-img.xcdn.link/thumb-lorem-face-6312_thumb.jpg`,
                };
            },
        }),
    ],
    secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};
export default NextAuth(authOptions);
