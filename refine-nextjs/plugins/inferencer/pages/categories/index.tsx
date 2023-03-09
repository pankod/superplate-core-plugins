import { <%- (_app.inferencer.componentPrefix || "") _%>ListInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";
import { GetServerSideProps } from "next";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export default function CategoryList() {
    return <<%- (_app.inferencer.componentPrefix || "") _%>ListInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none') { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );
    <%_ } _%>

    <%_ if (answers["auth-provider"] !== 'none') { _%>
    if (!authenticated) {
        return {
            props: {
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                ...translateProps,
                <%_ } _%>
            },
            redirect: {
                destination: redirectTo,
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
