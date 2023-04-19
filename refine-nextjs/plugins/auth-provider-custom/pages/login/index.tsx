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
<%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>
    
import { GetServerSideProps } from "next";
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>
<%_ if (_app.isAuthProviderCheck) { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (selectedSvg && answers["ui-framework"] !== "no") { _%>
import { AppIcon } from "src/components/app-icon";
<%_ } _%>

export default function Login() {
    return (
        <AuthPage
            type="login"
            <%- (_app.authPageProps || []).join("\n") %>
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
        />
    );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    <%_ if (_app.isAuthProviderCheck) { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );
    <%_ } _%>

    <%_ if (_app.isAuthProviderCheck) { _%>
    if (authenticated) {
        return {
            props: {},
            redirect: {
                destination: redirectTo ?? "/",
                permanent: false,
            },
        };
    }
    <%_ } _%>

    return {
        props: {
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
            ...translateProps,
            <%_ } _%>
        },
    };
};

