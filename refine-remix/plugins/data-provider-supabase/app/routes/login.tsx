<%_ if (answers["ui-framework"] === 'no') { _%>

import React from "react";
import { useTranslate } from "@pankod/refine-core";

import { login, createUserSession } from "~/session.server";
import { ActionFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

export interface ILoginForm {
    username: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const translate = useTranslate();
    const [searchParams] = useSearchParams();

    return (
        <>
            <h1>{translate("pages.login.title", "Sign in your account")}</h1>
            <form method="post">
                <input
                    type="hidden"
                    name="redirectTo"
                    value={searchParams.get("to") ?? undefined}
                />
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {translate(
                                    "pages.login.username",
                                    undefined,
                                    "username",
                                )}
                                :
                            </td>
                            <td>
                                <input
                                    name="username"
                                    type="text"
                                    size={20}
                                    autoCorrect="off"
                                    spellCheck={false}
                                    autoCapitalize="off"
                                    autoFocus
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {translate(
                                    "pages.login.password",
                                    undefined,
                                    "password",
                                )}
                                :
                            </td>
                            <td>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    size={20}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type="submit" value="login" />
            </form>
        </>
    );
};

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const redirectTo = form.get("redirectTo") || "/";
    const user = await login({ username, password });
    if (!user) {
        return null;
    }

    return createUserSession(user as any, redirectTo as string);
};

export default LoginPage;
<%_ } _%>

<%_ if (answers["ui-framework"] === 'antd') { _%>
import React from "react";
import { ActionFunction } from "@remix-run/node";
import {
    Row,
    Col,
    AntdLayout,
    Card,
    Typography,
    Form,
    Input,
    Button,
    Checkbox,
} from "@pankod/refine-antd";

import { createUserSession, login } from "~/session.server";

const { Text, Title } = Typography;

interface ILoginForm {
    username: string;
    password: string;
    remember: boolean;
}

export const LoginPage: React.FC = () => {
    const CardTitle = (
        <Title level={3} className="title">
            Sign in your account
        </Title>
    );

    const [form] = Form.useForm();

    return (
        <AntdLayout className="layout">
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col xs={22}>
                    <div className="container">
                        <div className="imageContainer">
                            <img src="./refine.svg" alt="Refine Logo" />
                        </div>
                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                            <Form<ILoginForm>
                                component="form"
                                layout="vertical"
                                id="loginForm"
                                form={form}
                                method="post"
                                requiredMark={false}
                                initialValues={{
                                    remember: false,
                                }}
                            >
                                <Form.Item
                                    name="username"
                                    label="Username"
                                    rules={[{ required: true }]}
                                >
                                    <Input
                                        name="username"
                                        size="large"
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: "12px" }}
                                >
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="●●●●●●●●"
                                        size="large"
                                    />
                                </Form.Item>
                                <div style={{ marginBottom: "12px" }}>
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        noStyle
                                    >
                                        <Checkbox
                                            style={{
                                                fontSize: "12px",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                    </Form.Item>

                                    <a
                                        style={{
                                            float: "right",
                                            fontSize: "12px",
                                        }}
                                        to="#"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <Button
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    onClick={() => {
                                        form.validateFields().then(() => {
                                            (
                                                document.getElementById(
                                                    "loginForm",
                                                ) as HTMLFormElement
                                            ).submit();
                                        });
                                    }}
                                    block
                                >
                                    Sign in
                                </Button>
                            </Form>
                            <div style={{ marginTop: 8 }}>
                                <Text style={{ fontSize: 12 }}>
                                    Don’t have an account?{" "}
                                    <a to="#" style={{ fontWeight: "bold" }}>
                                        Sign up
                                    </a>
                                </Text>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
        </AntdLayout>
    );
};

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const redirectTo = form.get("redirectTo") || "/";
    const user = await login({ username, password });
    if (!user) {
        return null;
    }

    return createUserSession(user as any, redirectTo as string);
};

export default LoginPage;
<%_ } _%>


<%_ if (answers["ui-framework"] === 'mui') { _%>

import * as React from "react";
import type { ActionFunction } from "@remix-run/node";
import { useForm } from "@pankod/refine-react-hook-form";
import {
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Box,
    Typography,
    Container,
    Card,
    CardContent,
} from "@mui/material";

import type {
    BaseRecord,
    HttpError} from "@pankod/refine-core";
import {
    useLogin,
    useTranslate,
} from "@pankod/refine-core";

import { createUserSession, login } from "~/session.server";

type ILoginForm = {
    username: string;
    password: string;
    remember?: boolean;
};

export const LoginPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BaseRecord, HttpError, ILoginForm>();

    const { mutate: login, isLoading } = useLogin<ILoginForm>();

    return (
        <>
            <Box
                component="div"
                sx={{
                    background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
                    backgroundSize: "cover",
                }}
            >
                <Container
                    component="main"
                    maxWidth="xs"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <img src="./refine.svg" alt="Refine Logo" />
                        </div>
                        <Box mt={4}>
                            <Card>
                                <CardContent sx={{ paddingX: "32px" }}>
                                    <Typography
                                        component="h1"
                                        variant="h5"
                                        align="center"
                                        sx={{
                                            fontWeight: "700",
                                            margin: "12px 0",
                                        }}
                                    >
                                        Sign in your account
                                    </Typography>
                                    <Box
                                        component="form"
                                        id="loginForm"
                                        method="post"
                                        onSubmit={handleSubmit((data) => {
                                          (
                                            document.getElementById(
                                                "loginForm",
                                            ) as HTMLFormElement
                                        ).submit();
                                        })}
                                        gap="16px"
                                    >
                                        <TextField
                                            {...register("username", {
                                                required: true,
                                            })}
                                            id="username"
                                            margin="normal"
                                            size="small"
                                            fullWidth
                                            label="Username"
                                            name="username"
                                            autoComplete="username"
                                            autoFocus
                                        />
                                        <TextField
                                            {...register("password", {
                                                required: true,
                                            })}
                                            id="password"
                                            size="small"
                                            margin="normal"
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            helperText={
                                                errors?.password?.message
                                            }
                                            type="password"
                                            placeholder="●●●●●●●●"
                                            autoComplete="current-password"
                                        />
                                        <Box
                                            component="div"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <FormControlLabel
                                                sx={{
                                                    span: {
                                                        fontSize: "12px",
                                                        color: "text.secondary",
                                                    },
                                                }}
                                                color="secondary"
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        id="remember"
                                                        {...register(
                                                            "remember",
                                                        )}
                                                    />
                                                }
                                                label="Remember me"
                                            />
                                            <Link
                                                to="#"
                                                sx={{
                                                    fontSize: "12px",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Forgot password?
                                                </Typography>
                                            </Link>
                                        </Box>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                my: "8px",
                                                color: "white",
                                            }}
                                            disabled={isLoading}
                                        >
                                           Sign in
                                        </Button>
                                        <Box style={{ marginTop: 8 }}>
                                            <Typography variant="subtitle2">
                                                Don’t have an account?
                                                <Link
                                                    underline="none"
                                                    to="#"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                   Sign up
                                                </Link>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};


export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const redirectTo = form.get("redirectTo") || "/";
    const user = await login({ username, password });
    if (!user) {
        return null;
    }

    return createUserSession(user as any, redirectTo as string);
};

export default LoginPage;
<%_ } _%>