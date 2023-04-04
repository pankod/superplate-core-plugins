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
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "@components/app-icon";
<%_ } _%>

const Icon = () => (
  <span style={{ position: "relative", top: 4 }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        fill-opacity=".45"
        d="M11.616 12.943 10.044 8l4.114-3.055H9.07L7.499 0h5.087l1.573 4.945c.912 2.867-.028 6.13-2.55 7.998h.007Zm-8.229 0L7.501 16l4.115-3.057L7.503 9.89l-4.116 3.054Zm-2.542-8c-.962 3.025.154 6.229 2.541 8.002v-.002L4.958 8 .845 4.943l5.086.002L7.499 0H2.41L.845 4.943Z"
      />
    </svg>
  </span>
);

export default function Login() {
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

                <form id="login-form" action="/auth/auth0/" method="post">
                    <Button
                        style={{ width: "240px", marginBottom: "32px" }}
                            type="primary"
                            size="middle"
                            onClick={() => {
                            (document.getElementById("login-form") as any).submit();
                            }}
                        >
                    Sign in
                </Button>

                </form>
                
                <Typography.Text type="secondary">
                Powered by
          <img
            style={{ padding: "0 5px" }}
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fauth0-2.svg"
          />
          Auth0
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

                <form id="login-form" action="/auth/auth0/" method="post">
                <Button style={{ width: "240px" }} variant="contained" size="large" onClick={() => {
              (document.getElementById("login-form") as any).submit();
            }} variant="contained">Sign in</Button>
                </form>
                
                <Typography align="center" color={"text.secondary"} fontSize="12px">
                Powered by
          <img
            style={{ padding: "0 5px" }}
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fauth0-2.svg"
          />
          Auth0
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

            <form id="login-form" action="/auth/auth0/" method="post">
                <Button
                     style={{ width: "240px" }} 
                    type="submit"
                    variant="filled"
                    onClick={() => {
              (document.getElementById("login-form") as any).submit();
            }}
                >
                    Sign in
                </Button>
            </form>
            
            <Space h="xl" />
            <Text fz="sm" color="gray">
                Powered by
          <img
            style={{ padding: "0 5px" }}
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fauth0-2.svg"
          />
          Auth0
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

                <form id="login-form" action="/auth/auth0/" method="post">
                    <Button  style={{ width: "240px" }}  colorScheme="blue" onClick={() => {
                        (document.getElementById("login-form") as any).submit();
                        }}>
                        Sign in
                    </Button>
                </form>

                <Text justifyContent="center" display="inherit" fontSize="12px" color="gray">
                Powered by
          <img
            style={{ padding: "0 5px" }}
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fauth0-2.svg"
          />
          Auth0
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
            <form action="/auth/auth0/" method="post">
                <button type="submit">Sign in</button>
            </form> 
            <p>Powered by
          <img
            style={{ padding: "0 5px" }}
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fauth0-2.svg"
          />
          Auth0</p>              
            </div>
        );
    <%_ } _%>
}
