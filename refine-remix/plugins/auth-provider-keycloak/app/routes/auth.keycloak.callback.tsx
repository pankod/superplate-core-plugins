import type { LoaderFunctionArgs } from "@remix-run/node";

import { authenticator } from "~/utils/auth.server";

export const loader = ({ request }: LoaderFunctionArgs) => {
    return authenticator.authenticate("keycloak", request, {
        failureRedirect: "/login",
        successRedirect: "http://localhost:3000/",
    });
};
