<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { AuthPage, ThemedTitleV2 } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>

import { GetServerSideProps } from "next";

import { authProvider } from "src/authProvider";

<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "src/components/app-icon";
<%_ } _%>

export default function ForgotPassword() {
    return (
        <AuthPage type="forgotPassword" 
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

ForgotPassword.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const { authenticated } = await authProvider.check(context);

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

        }
    }
};
