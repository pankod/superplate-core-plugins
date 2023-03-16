<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { ErrorComponent } from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { ErrorComponent } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { ErrorComponent } from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import { ErrorComponent } from "@refinedev/chakra-ui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'no') { _%>
    import { ErrorComponent } from "@refinedev/core";
<%_ } _%>

/**
 * We're using a splat route to catch all routes that don't match any other route and render the `ErrorComponent` as 404 page.
 */
export default function Index() {
    return <ErrorComponent />;
}
