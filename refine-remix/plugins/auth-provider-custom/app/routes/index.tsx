import { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/session.server";

export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

export const loader: LoaderFunction = async ({ request }) => {
    await requireUserId(request);

    return null;
};
