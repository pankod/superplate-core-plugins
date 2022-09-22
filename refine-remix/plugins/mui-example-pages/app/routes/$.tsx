import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { parseTableParams } from "@pankod/refine-core";
import { RemixRouteComponent, handleRefineParams } from "@pankod/refine-remix-router";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { checkAuthentication } from "@pankod/refine-remix-router";
<%_ } _%>

<%_ if (answers["data-provider"] === 'data-provider-custom-json-rest') { _%>
import dataProvider from "@pankod/refine-simple-rest";
    const API_URL = "https://api.fake-rest.refine.dev";
<%_ } else if (answers["data-provider"] === 'data-provider-nestjsx-crud') { _%>
import dataProvider from "@pankod/refine-nestjsx-crud";
    const API_URL = "https://api.nestjsx-crud.refine.dev"; 
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "~/authProvider";
<%_ } _%>

export const loader: LoaderFunction = async ({ params, request }) => {
    const refineSplatParams = handleRefineParams(params["*"]);

    const {
        resource = undefined,
        action = undefined,
        id = undefined,
    } = { ...refineSplatParams, ...params };

    <%_ if (answers["auth-provider"] !== 'none') { _%>

    await checkAuthentication(authProvider, request);
    <%_ } _%>

    const url = new URL(request.url);

    try {
        if (resource && action === "show" && id) {
            const data = await dataProvider(API_URL).getOne({
                resource: `${resource}`.slice(
                    `${resource}`.lastIndexOf("/") + 1,
                ),
                id,
            });

            return json({ initialData: data });
        } else if (resource && !action && !id) {
            const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =
            parseTableParams(url.search);

            const data = await dataProvider(API_URL).getList({
                resource: `${resource}`.slice(
                    `${resource}`.lastIndexOf("/") + 1,
                ),
                filters: parsedFilters,
                pagination: {
                    current: parsedCurrent || 1,
                    pageSize: parsedPageSize || 10,
                },
                sort: parsedSorter,
            });

            return json({ initialData: data });
        }

        return null;
    } catch (error) {
        return json({});
    }
};

export default RemixRouteComponent;

/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `RemixRouteComponent` like the following:
 *
 * export default RemixRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/
