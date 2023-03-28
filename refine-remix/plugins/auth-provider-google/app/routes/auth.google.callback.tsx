import type { LoaderArgs } from "@remix-run/node";

import { authenticator } from "~/utils/auth.server";

export const loader = ({ request }: LoaderArgs) => {
    return authenticator.authenticate("google", request, {
        failureRedirect: "/login",
        successRedirect: "http://localhost:3000/",
    });
};
