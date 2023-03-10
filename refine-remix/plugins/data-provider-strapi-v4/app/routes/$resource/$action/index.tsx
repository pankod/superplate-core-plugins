import { LoaderFunction } from "@remix-run/node";
import { checkAuthentication } from "@refinedev/remix-router";

export { RemixRouteComponent as default } from "@refinedev/remix-router";

import { authProvider } from "~/authProvider";

export const loader: LoaderFunction = async ({ request }) => {
    await checkAuthentication(authProvider, request);

    return null;
};
