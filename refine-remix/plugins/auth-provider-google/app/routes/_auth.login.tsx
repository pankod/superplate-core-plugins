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
    <span style={{ position: "relative", top: 1, padding: "0 4px" }}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        >
        <path
            fill="currentColor"
            fill-opacity=".1"
            d="M7.659 5.481c.163-.026.33-.017.495-.017a2.537 2.537 0 0 1 2.285 1.808H8.001a.73.73 0 1 0 .016 1.456h6.48a.731.731 0 0 0 .75-.532c.012.018.016.037.012.058a.74.74 0 0 1-.695.57H13.05c-.028-.006-.028.026-.032.044a5.083 5.083 0 0 1-1.471 2.78 5.097 5.097 0 0 1-2.235 1.268L6.38 9.98a3.633 3.633 0 0 1-.472-.535 2.53 2.53 0 0 1-.401-.946 2.571 2.571 0 0 1 .213-1.622 2.55 2.55 0 0 1 1.94-1.396Z"
        />
        <path
            fill="currentColor"
            fill-opacity=".3"
            fill-rule="evenodd"
            d="m13.658 2.343-.002.002c-.369.365-.735.732-1.102 1.1-.317.317-.634.635-.953.951a5.191 5.191 0 0 0-1.525-1.046 5.082 5.082 0 0 0-2.416-.43A5.097 5.097 0 0 0 3.1 6.613a5.089 5.089 0 0 0 .79 4.39c.378.518.857.965 1.401 1.307a5.105 5.105 0 0 0 3.973.622c.052-.025.087.015.12.052.01.011.019.022.029.03.36.364.722.725 1.084 1.087l1.003 1.004a8.023 8.023 0 0 1-7.366-.188 8.27 8.27 0 0 1-1.199-.81 7.62 7.62 0 0 1-.847-.808A7.769 7.769 0 0 1 .977 11.75l-.068-.124c-.049-.089-.097-.178-.135-.271a8.082 8.082 0 0 1-.21-.472c-.013-.038-.028-.076-.042-.113a5.813 5.813 0 0 1-.194-.572c-.006-.027-.022-.05-.037-.074a.467.467 0 0 1-.006-.008c.09.356.218.703.362 1.042a8.028 8.028 0 0 0 2.486 3.193 7.966 7.966 0 0 0 3.196 1.474 8.1 8.1 0 0 0 2.93.077 7.957 7.957 0 0 0 2.294-.731v-.01l.01.004a7.94 7.94 0 0 0 2.667-2.144 7.962 7.962 0 0 0 1.704-6.046 7.95 7.95 0 0 0-1.157-3.226 8.282 8.282 0 0 0-1.12-1.406Zm-7.02 3.512a2.493 2.493 0 0 1 1.02-.374c.13-.02.26-.02.39-.018h.106a2.537 2.537 0 0 1 2.285 1.809 2780.426 2780.426 0 0 0 4.125 0c.348.002.668.288.703.634l.005-.006c.011.1-.003.2-.024.297a.076.076 0 0 1 .011.057.74.74 0 0 1-.695.57H13.05c-.024-.005-.027.016-.03.034a5.084 5.084 0 0 1-1.473 2.79 5.096 5.096 0 0 1-2.235 1.268L7.29 10.892l-.91-.912a3.633 3.633 0 0 1-.472-.535 2.53 2.53 0 0 1-.401-.946 2.571 2.571 0 0 1 .213-1.623 2.55 2.55 0 0 1 .919-1.021Zm5.465 6.675a.546.546 0 0 1 .824-.353c.167.1.268.3.253.494a.562.562 0 0 1-.148.344.552.552 0 0 1-.377.165.536.536 0 0 1-.471-.243.539.539 0 0 1-.08-.407Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-opacity=".45"
            fill-rule="evenodd"
            d="M7.064.054a8.032 8.032 0 0 1 3.732.448c1.07.4 2.056 1.03 2.86 1.843-.368.365-.735.732-1.102 1.1-.317.317-.634.635-.953.95a5.191 5.191 0 0 0-1.525-1.045 5.082 5.082 0 0 0-2.416-.43A5.097 5.097 0 0 0 3.1 6.613a5.089 5.089 0 0 0 .79 4.39c.378.518.857.965 1.401 1.307a5.105 5.105 0 0 0 3.973.622c.052-.025.087.014.12.052.01.01.019.022.029.03.36.363.722.725 1.084 1.087.335.334.67.669 1.003 1.004a8.024 8.024 0 0 1-7.366-.188 8.27 8.27 0 0 1-1.199-.81 7.62 7.62 0 0 1-.847-.808 7.769 7.769 0 0 1-1.111-1.55l-.068-.123c-.049-.089-.097-.178-.135-.272a8.081 8.081 0 0 1-.21-.471l-.042-.114a5.813 5.813 0 0 1-.194-.57c-.006-.028-.022-.052-.037-.075a.467.467 0 0 1-.006-.008 7.707 7.707 0 0 1-.263-1.501 7.964 7.964 0 0 1 1.614-5.463 8.032 8.032 0 0 1 1.832-1.746A7.95 7.95 0 0 1 7.064.054Zm.838.861A.548.548 0 1 0 8.1 1.993.548.548 0 0 0 7.902.915Zm-4.568 1.91a.56.56 0 0 0-.259.08.546.546 0 0 0 .288 1.014.547.547 0 1 0-.03-1.095ZM1.357 7.46a.55.55 0 0 0-.385.798.548.548 0 0 0 1.007-.41.549.549 0 0 0-.622-.388ZM3.266 12.1a.546.546 0 1 0 .195 1.075.546.546 0 0 0-.195-1.075Zm4.638 1.91a.547.547 0 1 0 .608.726.547.547 0 0 0-.608-.726Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-opacity=".45"
            d="M12.541 12.1a.532.532 0 0 1 .386.077c.167.1.268.3.253.494a.562.562 0 0 1-.148.344.552.552 0 0 1-.377.165.536.536 0 0 1-.471-.243.539.539 0 0 1-.08-.407.546.546 0 0 1 .437-.43ZM8.083 7.367a.832.832 0 0 0-.306.034.763.763 0 0 0-.38.285c-.031.043-.05.092-.07.141a.777.777 0 0 1-.054.115.729.729 0 0 0 .744.786h6.48a.731.731 0 0 0 .75-.532.91.91 0 0 0 .024-.297l-.004.007a1.27 1.27 0 0 1-.013.022.722.722 0 0 0-.69-.563l-4.649.002a25318.242 25318.242 0 0 0-1.832 0Z"
        />
        <path
            fill="currentColor"
            fill-opacity=".65"
            d="M8.525 1.301a.55.55 0 0 0-.623-.386.548.548 0 1 0 .623.386ZM1.979 7.85a.549.549 0 0 0-.921-.228.548.548 0 1 0 .921.227ZM3.334 2.825a.542.542 0 0 1 .411.155.547.547 0 1 1-.412-.156ZM8 7.272a.729.729 0 0 0-.726.67.778.778 0 0 0 .053-.115.62.62 0 0 1 .07-.14.763.763 0 0 1 .38-.286.832.832 0 0 1 .306-.033h1.835l4.646-.003a.722.722 0 0 1 .69.564.867.867 0 0 0 .013-.022.728.728 0 0 0-.703-.634 2555.887 2555.887 0 0 0-4.125-.001H8.001ZM3.266 12.1a.548.548 0 0 1 .589.3.544.544 0 0 1-.861.64.546.546 0 0 1 .272-.942ZM8.332 14.114a.547.547 0 1 0-.661.867.547.547 0 0 0 .66-.867Z"
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
                }}
                <%_ if (selectedTitle) { _%>
                    text="<%= selectedTitle %>"
                <%_ } _%>
                <%_ if (selectedSvg) { _%>
                    icon={<AppIcon />}
                <%_ } _%>
                />

                <form id="login-form" action="/auth/google/" method="post">
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

                <form id="login-form" action="/auth/google/" method="post">
                <Button style={{ width: "240px" }} variant="contained" size="large" onClick={() => {
              (document.getElementById("login-form") as any).submit();
            }} variant="contained">Sign in</Button>
                </form>
                
                <Typography align="center" color={"text.secondary"} fontSize="12px">
                Powered by
          <img
            style={{ padding: "0 5px" }}
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
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

            <form id="login-form" action="/auth/google/" method="post">
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
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
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

                <form id="login-form" action="/auth/google/" method="post">
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
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
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
            <form action="/auth/google/" method="post">
                <button type="submit">Sign in</button>
            </form>    
            <p>
                Powered by
          <img
            style={{ padding: "0 5px" }}
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
            </p> 
            </div>
        );
    <%_ } _%>
}
