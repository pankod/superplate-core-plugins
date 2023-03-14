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


import { Authenticated 
    <%_ if (answers["ui-framework"] === 'no') { _%>
    ErrorComponent
<%_ } _%> } from "@refinedev/core";

export default function Custom404() {
    return (
        <%_ if (answers["auth-provider"] !== 'none') { _%>
        <Authenticated>
        <%_ } _%>
            <ErrorComponent />
        <%_ if (answers["auth-provider"] !== 'none') { _%>
        </Authenticated>
        <%_ } _%>
    );
}

