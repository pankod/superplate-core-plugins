import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";
import { GetServerSideProps } from "next";
<%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-strapi-v4' || answers["data-provider"] === 'data-provider-appwrite') { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export default function ProductCreate() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-strapi-v4' || answers["data-provider"] === 'data-provider-appwrite') { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );
    <%_ } _%>

    <%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-strapi-v4' || answers["data-provider"] === 'data-provider-appwrite') { _%>
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
