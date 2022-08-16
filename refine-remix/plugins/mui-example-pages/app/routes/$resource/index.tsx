import { json, LoaderFunction } from "@remix-run/node";
import { parseTableParams } from "@pankod/refine-core";
export { RemixRouteComponent as default } from "@pankod/refine-remix-router";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { checkAuthentication } from "@pankod/refine-remix-router";
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none' && answers["data-provider"] === 'data-provider-custom-json-rest') { _%>
import dataProvider from "@pankod/refine-simple-rest";
    const API_URL = "https://api.fake-rest.refine.dev";
<%_ } else if (answers["auth-provider"] !== 'none' && answers["data-provider"] === 'data-provider-nestjsx-crud') { _%>
import dataProvider from "@pankod/refine-nestjsx-crud";
    const API_URL = "https://api.nestjsx-crud.refine.dev"; 
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "~/authProvider";
<%_ } _%>

export const loader: LoaderFunction = async ({ params, request }) => {
    <%_ if (answers["auth-provider"] !== 'none') { _%>
        await checkAuthentication(authProvider, request);
    <%_ } _%>

    const { resource } = params;
    const url = new URL(request.url);

    const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =
    parseTableParams(url.search);
        try {
            const data = await dataProvider(API_URL).getList({
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
