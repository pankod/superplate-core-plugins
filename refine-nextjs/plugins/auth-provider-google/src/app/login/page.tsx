"use client"

<%_ if (answers["ui-framework"] === "antd") { _%>
import { ThemedTitleV2 } from "@refinedev/antd";
import { Button, Typography, Layout, Space } from "antd";
<%_ } _%> 
<%_ if (answers["ui-framework"] === 'mui') { _%>
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemedTitleV2 } from "@refinedev/mui";
<%_ } _%>
import { useLogin } from "@refinedev/core";
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "@components/app-icon";
<%_ } _%>


export default function Login() {
    const { mutate: login } = useLogin();

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
                <ThemedTitleV2
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
                <Button
                    style={{ width: "240px", marginBottom: "32px" }}
                    type="primary"
                    size="middle"
                    onClick={() => login({})}
                >
                    Sign in
                </Button>
                <Typography.Text type="secondary">
                Powered by
          <img
            style={{ padding: "0 5px" }}
            alt="Google"
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
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
                <ThemedTitleV2
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

                <Button style={{ width: "240px" }} variant="contained" size="large" onClick={() => login({})}>
                      Sign in
                </Button>
                <Typography align="center" color={"text.secondary"} fontSize="12px">
                Powered by
          <img
            style={{ padding: "0 5px" }}
            alt="Google"
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
                </Typography>
            </Box>
            </Container>
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
                 Sign in
            </button>
            <p>
                Powered by
          <img
            style={{ padding: "0 5px" }}
            alt="Google"
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
            </p>         
            </div>
        );
    <%_ } _%>
}
