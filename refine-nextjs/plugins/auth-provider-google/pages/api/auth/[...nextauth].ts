import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // !!! Should be stored in .env file.
        GoogleProvider({
            clientId: `477775060025-dtg8bbi9fi2ff3o95b25gog1hlik9i6b.apps.googleusercontent.com`,
            clientSecret: `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`,
        }),
    ],
    secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};
export default NextAuth(authOptions);
