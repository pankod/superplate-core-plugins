<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { WelcomePage } from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { WelcomePage } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { WelcomePage } from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import { WelcomePage } from "@refinedev/chakra-ui";
<%_ } _%>

export default function Index() {
    return (
        <WelcomePage />
    );
}