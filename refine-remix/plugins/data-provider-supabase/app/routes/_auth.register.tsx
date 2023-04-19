<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { AuthPage, ThemedTitleV2 } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mantine') { _%>
     import { AuthPage, ThemedTitleV2 } from "@refinedev/mantine";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'chakra') { _%>
     import { AuthPage, ThemedTitleV2 } from "@refinedev/chakra-ui";
 <%_ } _%>
 <%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
    import { AppIcon } from "@components/app-icon";
<%_ } _%>

export default function Register() {
    return (
        <AuthPage type="register" <%_ if ((selectedSvg || selectedTitle) && answers["ui-framework"] !== "no") { _%>
            title={(
                <ThemedTitleV2
                    collapsed={false}
                    <%_ if (selectedTitle) { _%>
                        text="<%= selectedTitle %>"
                    <%_ } _%>
                    <%_ if (selectedSvg) { _%>
                        icon={<AppIcon />}
                    <%_ } _%>
                />
            )}
            <%_ } _%> />
    );
}
