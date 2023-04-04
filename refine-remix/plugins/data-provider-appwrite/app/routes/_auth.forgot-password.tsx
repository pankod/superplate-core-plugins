<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { AuthPage, ThemedTitle } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { AuthPage, ThemedTitle } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mantine') { _%>
     import { AuthPage, ThemedTitle } from "@refinedev/mantine";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'chakra') { _%>
     import { AuthPage, ThemedTitle } from "@refinedev/chakra-ui";
 <%_ } _%>
 <%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>

export default function ForgotPassword() {
    return (
        <AuthPage type="forgotPassword"
            <%_ if ((selectedSvg || selectedTitle) && answers["ui-framework"] !== "no") { _%>
            title={(
                <ThemedTitle
                    collapsed={false}
                    <%_ if (selectedTitle) { _%>
                        text="<%= selectedTitle %>"
                    <%_ } _%>
                    <%_ if (selectedSvg) { _%>
                        icon={<AppIcon />}
                    <%_ } _%>
                />
            )}
            <%_ } _%>
        />
    );
}