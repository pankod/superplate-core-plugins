<%_ if (answers["ui-framework"] === "antd") { _%>
import { ThemedTitle } from "@refinedev/antd";
import { Button, Typography, Layout, Space } from "antd";
<%_ } _%> 
<%_ if (answers["ui-framework"] === 'mui') { _%>
import { Box, Button, Container, Typography } from "@mui/material";
import { ThemedTitle } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
import { Button, Box, Space, Text } from "@mantine/core";
import { ThemedTitle } from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
import { Button, Box, Text, VStack } from "@chakra-ui/react";
import { ThemedTitle } from "@refinedev/chakra-ui";
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
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "src/components/app-icon";
<%_ } _%>

<%_ if (_app.isNextAuthCheck) { _%>
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
<%_ } _%>

const Icon = () => (
  <span style={{ position: "relative", top: 3, padding: "0 3px" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        fill-opacity=".3"
        d="m4.167 8 2.666-4.334.667 1-2 3.333H4.167Z"
      />
      <path
        fill="currentColor"
        fill-opacity=".3"
        d="m4.167 8 2.666 4.333H5.5l-2-3.334.667-1ZM8.833 4.666l2 3.333h1.334L9.5 12.333h1.333L13.5 7.999l-.667-1-.666 1L9.5 3.666l-.667 1Z"
      />
      <path
        fill="currentColor"
        fill-opacity=".15"
        d="M9.5 3.666h1.333l.6 1H16.5v6.667h-5.067L13.5 7.999l-.667-1-.666 1L9.5 3.666ZM2.5 4.666h2.385L2.833 7.999 3.5 9l1.4 2.334H2.5l-2-3.334 2-3.333Z"
      />
      <path
        fill="currentColor"
        fill-opacity=".15"
        d="M8.833 11.333H7.5l-.667 1-2.666-4.334H5.5l2-3.333h1.333l2 3.333-2 3.334Z"
      />
      <path
        fill="currentColor"
        fill-opacity=".45"
        d="m4.5 1.333-2 3.333h2.385L2.833 8 3.5 9l.667-1 2.666-4.334.667 1h1.333l.667-1h1.333l.6 1h2.4l-2-3.333H4.5ZM8.833 11.333H7.5l-.667 1H5.5l-.6-1H2.5l2 3.333h7.333l2-3.333h-2.4l-.6 1H9.5L12.167 8h-1.334l-2 3.333Z"
      />
    </svg>
  </span>
);



export default function Login() {
    const { mutate: login } = useLogin();

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const t = useTranslate();
    <%_ } _%>


    <%_ if (answers["ui-framework"] === "antd") { _%>
        return (
            <Layout
            style={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Space direction="vertical" align="center">
                <ThemedTitle
                collapsed={false}
                wrapperStyles={{
                    fontSize: "22px",
                    marginBottom: "36px",
                }}
                <%_ if (selectedTitle) { _%>
                    text="<%= selectedTitle %>"
                <%_ } _%>
                <%_ if (selectedSvg) { _%>
                    icon={<AppIcon />}
                <%_ } _%>
                />
                <Button
                    style={{ width: "240px" }}
                    type="primary"
                    size="middle"
                    onClick={() => login({})}
                >
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                    {t("pages.login.signin", "Sign in")}
                    <%_ } else { _%>
                        Sign in
                    <%_ } _%>
                </Button>
                <Typography.Text type="secondary">
                Powered by <Icon /> Keycloak
                </Typography.Text>
            </Space>
            </Layout>
        );
    <%_ } _%> 
    
    <%_ if (answers["ui-framework"] === 'mui') { _%>
        return (
            <Container
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Box
                display="flex"
                gap="36px"
                justifyContent="center"
                flexDirection="column"
            >
                <ThemedTitle
                collapsed={false}
                wrapperStyles={{
                    fontSize: "22px",
                    justifyContent: "center",
                }}
                <%_ if (selectedTitle) { _%>
                    text="<%= selectedTitle %>"
                <%_ } _%>
                <%_ if (selectedSvg) { _%>
                    icon={<AppIcon />}
                <%_ } _%>
                />

                <Button style={{ width: "240px" }} size="large" variant="contained" onClick={() => login({})}>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                    {t("pages.login.signin", "Sign in")}
                    <%_ } else { _%>
                        Sign in
                    <%_ } _%>
                </Button>
                <Typography align="center" color={"text.secondary"} fontSize="12px">
                Powered by <Icon /> Keycloak
                </Typography>
            </Box>
            </Container>
        );
    <%_ } _%>

    <%_ if (answers["ui-framework"] === 'mantine') { _%>
        return (
            <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <ThemedTitle
                collapsed={false}
                wrapperStyles={{
                fontSize: "22px",
                }}
                <%_ if (selectedTitle) { _%>
                    text="<%= selectedTitle %>"
                <%_ } _%>
                <%_ if (selectedSvg) { _%>
                    icon={<AppIcon />}
                <%_ } _%>
            />
            <Space h="xl" />

            <Button
                style={{ width: "240px" }}
                type="button"
                variant="filled"
                onClick={() => login({})}
            >
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                    {t("pages.login.signin", "Sign in")}
                <%_ } else { _%>
                    Sign in
                <%_ } _%>
            </Button>
            <Space h="xl" />
            <Text fz="sm" color="gray">
                Powered by <Icon /> Keycloak
            </Text>
            </Box>
        );
    <%_ } _%>

    <%_ if (answers["ui-framework"] === 'chakra') { _%>
        return (
            <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <VStack spacing="10" align="stretch">
                <ThemedTitle
                collapsed={false}
                wrapperStyles={{
                    fontSize: "22px",
                }}
                <%_ if (selectedTitle) { _%>
                    text="<%= selectedTitle %>"
                <%_ } _%>
                <%_ if (selectedSvg) { _%>
                    icon={<AppIcon />}
                <%_ } _%>
                />

                <Button style={{ width: "240px" }} colorScheme="blue" onClick={() => login({})}>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                    {t("pages.login.signin", "Sign in")}
                    <%_ } else { _%>
                        Sign in
                    <%_ } _%>
                </Button>

                <Text justifyContent="center" display="inherit" fontSize="12px" color="gray">
                Powered by <Icon /> Keycloak
                </Text>
            </VStack>
            </Box>
        );
    <%_ } _%>

    <%_ if (answers["ui-framework"] === "no") { _%>
        return(
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
            <button onClick={() => login({})}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                {t("pages.login.signin", "Sign in")}
                <%_ } else { _%>
                    Sign in
                <%_ } _%>
            </button>
            <p>
                Powered by <Icon /> Keycloak
            </p>   
            </div>
        );
    <%_ } _%>
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

