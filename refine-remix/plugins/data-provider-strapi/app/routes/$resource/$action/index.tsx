import { json, LoaderFunction } from "@remix-run/node";
export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
    await requireUserId(request);

    return json({});
};
