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

export default function Login() {

    const Auth0Icon = () => (
        <svg
        width="13"
        height="13"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M11.6163 12.9434L10.0443 8L14.1575 4.94542H9.071L7.49905 0H12.586L14.1595 4.94501C15.0706 7.81215 14.1308 11.0748 11.6087 12.9425L11.6163 12.9434ZM3.38742 12.9434L7.50064 16L11.6163 12.9434L7.50303 9.88877L3.38742 12.9434ZM0.844563 4.94336C-0.11718 7.96828 0.999207 11.172 3.38623 12.9446V12.9434L4.95818 8L0.844962 4.94336L5.93068 4.94501L7.49905 0H2.40934L0.844563 4.94336Z"
            fill="black"
            fill-opacity="0.45"
        />
        </svg>
    );

    <%_ if (answers["ui-framework"] === "antd") { _%>
        return (
            <Layout
            style={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Space direction="vertical" align="center" size="large">
                <ThemedTitle
                collapsed={false}
                wrapperStyles={{
                    fontSize: "22px",
                }}
                />

                <form id="login-form" action="/auth/auth0/" method="post">
                    <Button
                        style={{ width: "240px" }}
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
                Powered by <Auth0Icon /> Auth0
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
                gap="25px"
                justifyContent="center"
                flexDirection="column"
            >
                <ThemedTitle
                collapsed={false}
                wrapperStyles={{
                    fontSize: "22px",
                    justifyContent: "center",
                }}
                />

                <form id="login-form" action="/auth/auth0/" method="post">
                <Button style={{ width: "240px" }} onClick={() => {
              (document.getElementById("login-form") as any).submit();
            }} variant="contained">Sign in</Button>
                </form>
                
                <Typography align="center" color={"text.secondary"} fontSize="12px">
                Powered by <Auth0Icon /> Auth0
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
            
            <Space h="lg" />
            <Text fz="sm" color="gray">
                Powered by <Auth0Icon /> Auth0
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
            <VStack spacing="8" align="stretch">
                <ThemedTitle
                collapsed={false}
                wrapperStyles={{
                    fontSize: "22px",
                }}
                />

                <form id="login-form" action="/auth/auth0/" method="post">
                    <Button  style={{ width: "240px" }}  colorScheme="blue" onClick={() => {
                        (document.getElementById("login-form") as any).submit();
                        }}>
                        Sign in
                    </Button>
                </form>

                <Text alignItems="center" display="inherit" fontSize="xs" color="gray">
                Powered by <Auth0Icon /> Auth0
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
                }}
            >
            <form action="/auth/auth0/" method="post">
                <button type="submit">Sign in</button>
            </form> 
            <p>Powered by <Auth0Icon /> Auth0</p>              
            </div>
        );
    <%_ } _%>
}
