import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

export const loader: LoaderFunction = async () => {
    return json({})
};

