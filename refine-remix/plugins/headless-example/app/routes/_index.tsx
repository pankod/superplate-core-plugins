import { NavigateToResource } from "@refinedev/remix-router";

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
