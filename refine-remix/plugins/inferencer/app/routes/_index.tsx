import { NavigateToResource } from "@refinedev/remix-router";

<%_ if ((answers["auth-provider"] === 'none') && (answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-appwrite' || answers["data-provider"] === 'data-provider-strapi-v4')) { _%>
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authProvider } from "~/authProvider";
<%_ } _%>


/**
 * Since we don't have any routes for the index page, we're redirecting the user to the first resource.
 *
 * This can also be done using the `loader` function and `redirect`.
 */
export default function Index() {
    <%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
        return <NavigateToResource resource="blog-posts" />;
    <%_ } else { _%>
        return <NavigateToResource resource="blog_posts" />;
    <%_ } _%>
}


<%_ if ((answers["auth-provider"] === 'none') && (answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-appwrite' || answers["data-provider"] === 'data-provider-strapi-v4')) { _%>
/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export async function loader({ request }: LoaderArgs) {
const { authenticated, redirectTo } = await authProvider.check(request);

if (!authenticated) {
    throw redirect(redirectTo ?? "/login");
}

return {};
}
<%_ } _%>