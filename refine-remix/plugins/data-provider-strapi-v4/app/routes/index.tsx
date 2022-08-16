import type { LoaderFunction } from "@remix-run/node";
import { checkAuthentication } from "@pankod/refine-remix-router";

import { authProvider } from "~/authProvider";

export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

export const loader: LoaderFunction = async ({ params, request }) => {
    await checkAuthentication(authProvider, request);

    return null;
};
