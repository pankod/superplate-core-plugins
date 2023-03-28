import { Authenticator } from "remix-auth";
import { KeycloakStrategy } from "remix-auth-keycloak";

import { sessionStorage } from "~/services/session.server";

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<{}>(sessionStorage);

const keycloakStrategy = new KeycloakStrategy(
    {
        // !!! Should be stored in .env file.
        useSSL: true,
        domain: "lemur-0.cloud-iam.com/auth",
        realm: "refine",
        clientID: "refine-demo",
        clientSecret: "refine",
        callbackURL: "http://localhost:3000/auth/keycloak/callback",
    },
    async ({ accessToken, extraParams, profile, refreshToken, context }) => {
        const { id, displayName, photos } = profile;
        return Promise.resolve({
            id,
            name: displayName,
            avatar: `https://faces-img.xcdn.link/thumb-lorem-face-6312_thumb.jpg`,
        });
    },
);

authenticator.use(keycloakStrategy);
