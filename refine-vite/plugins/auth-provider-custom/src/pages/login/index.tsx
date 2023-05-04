<%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'antd') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
} from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
} from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
} from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
} from "@refinedev/chakra-ui";
<%_ } _%>
<%_ if (selectedSvg && answers["ui-framework"] !== "no") { _%>
import { AppIcon } from "../../components/app-icon";
<%_ } _%>

export const Login = () => {
    return (
        <AuthPage
            type="login"
            <%_ if ((selectedSvg || selectedTitle) && answers["ui-framework"] !== "no") { _%>
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
            <%_ } _%>
            <%- (_app.authPageProps || []).join("\n") %>
        />
    );
};
