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

import { GetServerSideProps } from "next";
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

import { authProvider } from "src/authProvider";

<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "src/components/app-icon";
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

Register.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const { authenticated } = await authProvider.check(context);

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );
    <%_ } _%>

    if (authenticated) {
        return {
            props: {},
            redirect: {
                destination: `/`,
                permanent: false,
            },
        };
    }

    return {
        props: {
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
            ...translateProps,
            <%_ } _%>
        }
    }
};
