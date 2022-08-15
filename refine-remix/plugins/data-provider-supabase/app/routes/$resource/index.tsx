import { dataProvider } from "@pankod/refine-supabase";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { parseTableParams } from "@pankod/refine-core";

import { requireUserId } from "~/session.server";
import { supabaseClient } from "~/utility";

export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

export const loader: LoaderFunction = async ({ params, request }) => {
    await requireUserId(request);

    const { resource } = params;
    const url = new URL(request.url);

    const {
        parsedCurrent,
        parsedPageSize,
        parsedSorter,
        parsedFilters,
    } = parseTableParams(url.search);

    try {
        const data = await dataProvider(supabaseClient).getList({
            resource: resource as string,
            filters: parsedFilters,
            pagination: {
                current: parsedCurrent || 1,
                pageSize: parsedPageSize || 10,
            },
            sort: parsedSorter,
        });

        return json({ initialData: data });
    } catch (error) {
        return json({});
    }
};
