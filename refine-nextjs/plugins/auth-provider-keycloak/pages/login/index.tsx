<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { Button } from "antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { Button } from "@mui/material";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { Button } from "@mantine/core";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import { Button } from "@chakra-ui/react";
<%_ } _%>
import { useLogin } from "@refinedev/core";
    
import { GetServerSideProps } from "next";
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslate } from "@refinedev/core";
<%_ } _%>
<%_ if (_app.isAuthProviderCheck) { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>

<%_ if (_app.isNextAuthCheck) { _%>
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
<%_ } _%>


export default function Login() {
    const { mutate: login } = useLogin();

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const t = useTranslate();
    <%_ } _%>

    return(
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <%_ if (answers["ui-framework"] === "no") { _%>
                <button onClick={() => login({})}>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                    {t("pages.login.signin", "Sign in")}
                    <%_ } else { _%>
                        Sign in with Auth0
                    <%_ } _%>
            </button>
            <%_ } else { _%>
                <Button onClick={() => login({})}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                {t("pages.login.signin", "Sign in")}
                <%_ } else { _%>
                Sign in
                <%_ } _%>
            </Button>
            <%_ } _%>                
        </div>
    );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {

    <%_ if (_app.isNextAuthCheck) { _%>
      const session = await getServerSession(
        context.req,
        context.res,
        authOptions,
    );
    <%_ } _%>

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
                destination: "/",
                permanent: false,
            },
        };
    }
    <%_ } _%>

    <%_ if (_app.isNextAuthCheck) { _%>
      if (session) {
        return {
            props: {},
            redirect: {
                destination: "/",
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

