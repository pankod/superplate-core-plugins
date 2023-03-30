<%_ if (answers["ui-framework"] === 'antd') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
import {
    AuthPage,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/chakra-ui";
<%_ } _%>
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "app/components/app-icon";
<%_ } _%>

export default function Login() {
    return (
        <AuthPage
            type="login"
            <%_ if (answers["ui-framework"] === 'antd' || answers["ui-framework"] === 'mantine') { _%>
                formProps={{
                    initialValues: {
                        email: "admin@refine.dev",
                        password: "demodemo",
                    },
                }}
            <%_ } _%>
            <%_ if (answers["ui-framework"] === 'mui' || answers["ui-framework"] === 'chakra') { _%>
                formProps={{
                    defaultValues: {
                        email: "admin@refine.dev",
                        password: "demodemo",
                    },
                }}
            <%_ } _%>
            <%_ if ((selectedSvg || selectedTitle) && answers["ui-framework"] !== "no") { _%>
            title={(
                <ThemedTitle
                    collapsed={false}
                    <%_ if (selectedTitle) { _%>
                        text={"<%= selectedTitle %>"}
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
