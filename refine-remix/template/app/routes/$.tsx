import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { RemixRouteComponent } from "@pankod/refine-remix-router";
<%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] == 'data-provider-strapi-graphql' || answers["data-provider"] == 'data-provider-supabase') { _%>
import { checkAuthentication } from "@pankod/refine-remix-router";
import { authProvider } from "~/authProvider";
<%_ } _%>

export const loader: LoaderFunction = async ({ request }) => {
    <%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] == 'data-provider-strapi-graphql' || answers["data-provider"] == 'data-provider-supabase') { _%>
    await checkAuthentication(authProvider, request);
    <%_ } _%>

    return json({})
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


