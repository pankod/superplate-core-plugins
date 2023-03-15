<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { AuthPage } from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { AuthPage } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { AuthPage } from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import { AuthPage } from "@refinedev/chakra-ui";
<%_ } _%>
<%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>
    
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export default function Login() {
    return (
        <AuthPage
            type="login"
            formProps={{
                <%_ if (answers["ui-framework"] === 'antd' || answers["ui-framework"] === 'mantine') { _%>
                    initialValues: {
                        email: "demo@refine.dev",
                        password: "demodemo",
                    },
                <%_ } _%>
                <%_ if (answers["ui-framework"] === 'mui' || answers["ui-framework"] === 'chakra') { _%>
                    defaultValues: {
                        email: "demo@refine.dev",
                        password: "demodemo",
                    },
                <%_ } _%>
            }}
        />
    );
}

Login.noLayout = true;

<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );

    return {
        props: {
            ...translateProps,
        },
    };
};
<%_ } _%>
