import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";

import { sessionStorage } from "~/services/session.server";

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<{}>(sessionStorage);

const auth0Strategy = new Auth0Strategy(
    {
        // !!! Should be stored in .env file.
        callbackURL: "http://localhost:3000/auth/auth0/callback",
        clientID: "AcinJvjWp1Dr41gPcJeQ20r5vcsteks4",
        clientSecret:
            "y3pj2KaTiNgING-5e8_JYmX_bIQSwvkp_XgDcA75sEPSSB2zmi0n-3UoTfH0pOTP",
        domain: "dev-y38p834gjptooc4g.us.auth0.com",
    },
    async ({ accessToken, extraParams, profile, refreshToken }) => {
        const { id, displayName, photos } = profile;
        return Promise.resolve({
            id,
            name: displayName,
            avatar: photos?.[0]?.value,
        });
    },
);

authenticator.use(auth0Strategy);
