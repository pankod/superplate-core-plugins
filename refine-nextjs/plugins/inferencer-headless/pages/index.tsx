import { NavigateToResource } from "@refinedev/nextjs-router";

export default function Home() {
    <%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
        return <NavigateToResource resource="blog-posts" />;
    <%_ } else { _%>
        return <NavigateToResource resource="blog_posts" />;
    <%_ } _%>
}

Home.noLayout = true;