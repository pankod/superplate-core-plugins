import type { LoaderFunction } from "@remix-run/node";
import { checkAuthentication } from "@pankod/refine-remix-router";

import strapiAuthProvider from "~/authProvider";

import { API_URL } from "~/constants";
export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

export const loader: LoaderFunction = async ({ request }) => {
    const { authProvider } = strapiAuthProvider(API_URL);

    await checkAuthentication(authProvider, request);

    return null;
};
