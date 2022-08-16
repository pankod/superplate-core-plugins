import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as cookie from 'cookie'
import { parseTableParams } from "@pankod/refine-core";
import { dataProvider } from "@pankod/refine-supabase";

import { checkAuthentication } from "@pankod/refine-remix-router";

import { supabaseClient } from "~/utility";
import { authProvider } from "~/authProvider";
import { TOKEN_KEY } from "~/constants";

export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

export const loader: LoaderFunction = async ({ params, request }) => {
    await checkAuthentication(authProvider, request);

    const { resource } = params;
    const url = new URL(request.url);

    const parsedCookie = cookie.parse(request.headers.get("Cookie"));
    const token = parsedCookie[TOKEN_KEY];
   

    await supabaseClient.auth.setAuth(token);

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
