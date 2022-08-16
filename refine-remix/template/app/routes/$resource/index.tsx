import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
<%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] == 'data-provider-strapi-graphql' || answers["data-provider"] == 'data-provider-supabase') { _%>
import { checkAuthentication } from "@pankod/refine-remix-router";
import { authProvider } from "~/authProvider";
<%_ } _%>

export { RemixRouteComponent as default } from "@pankod/refine-remix-router";
export const loader: LoaderFunction = async ({ request }) => {
    <%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] == 'data-provider-strapi-graphql' || answers["data-provider"] == 'data-provider-supabase') { _%>
    await checkAuthentication(authProvider, request);
    <%_ } _%>

    return json({})
};

