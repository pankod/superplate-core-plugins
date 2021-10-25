import React from "react";
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
  useLogin,
  <%_ if (i18n === "i18n") { _%>
    useTranslate,
<%_ } _%>
} from "@pankod/refine";

const { Text, Title } = Typography;

interface ILoginForm {
  username: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const [form] = Form.useForm<ILoginForm>();

<%_ if (i18n === "i18n") { _%>
    const t = useTranslate();
<%_ } _%>

  const { mutate: login } = useLogin<ILoginForm>();

  const CardTitle = (
    <Title level={3} style={{
      textAlign: "center",
      color: "#626262",
      fontSize: "30px",
      letterSpacing: "-0.04em"
    }}>
        <%_ if (i18n === "i18n") { _%>
       {t("pages.login.title", "Sign in your account")}
       <%_ } else { _%>
        Sign in your account
        <%_ } _%>
    </Title>
  );

  return (
    <AntdLayout 
    style={{
      background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
      backgroundSize: "cover"
    }}>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh"
        }}
      >
        <Col xs={22}>
          <div style={{ maxWidth: "408px", margin: "auto" }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "28px"
              }}>
              <img src="./refine.svg" alt="Refine Logo" />
            </div>
            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form<ILoginForm>
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  login(values);
                }}
                requiredMark={false}
                initialValues={{
                  remember: false
                }}
              >
                <Form.Item
                  name="username"
                  label={
                    <%_ if (i18n === "i18n") { _%>
                    t("pages.login.username", "Username")
                    <%_ } else { _%>
                      Username
                    <%_ } _%>
                  }
                  rules={[{ required: true }]}
                >
                  <Input 
                    size="large" 
                    placeholder={
                      <%_ if (i18n === "i18n") { _%>
                        t("pages.login.username", "Username")
                        <%_ } else { _%>
                          Username
                        <%_ } _%>
                    } 
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label={
                    <%_ if (i18n === "i18n") { _%>
                    t("pages.login.password", "Password")
                    <%_ } else { _%>
                      Password
                    <%_ } _%>
                  }
                  rules={[{ required: true }]}
                  style={{ marginBottom: "12px" }}
                >
                  <Input type="password" placeholder="●●●●●●●●" size="large" />
                </Form.Item>
                <div style={{ marginBottom: "12px" }}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox
                      style={{
                        fontSize: "12px"
                      }}
                    >
                    <%_ if (i18n === "i18n") { _%>
                    t("pages.login.remember", "Remember me")
                    <%_ } else { _%>
                      Remember me
                    <%_ } _%>
                    </Checkbox>
                  </Form.Item>

                  <a
                    style={{
                      float: "right",
                      fontSize: "12px"
                    }}
                    href="#"
                  >
                  <%_ if (i18n === "i18n") { _%>
                  t("pages.login.forgotPassword", "Forgot password?")
                  <%_ } else { _%>
                    Forgot password?
                  <%_ } _%>
                  </a>
                </div>
                <Button type="primary" size="large" htmlType="submit" block>
                <%_ if (i18n === "i18n") { _%>
                  t("pages.login.signin", "Sign in")
                <%_ } else { _%>
                  Sign in
                <%_ } _%>
                </Button>
              </Form>
              <div style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 12 }}>
                <%_ if (i18n === "i18n") { _%>
                  t("pages.login.noAccount", "Don’t have an account?")
                <%_ } else { _%>
                  Don’t have an account?
                <%_ } _%>{" "}
                  <a href="#" style={{ fontWeight: "bold" }}>
                  <%_ if (i18n === "i18n") { _%>
                    t("pages.login.signup", "Sign up")
                  <%_ } else { _%>
                    Sign up
                  <%_ } _%>{" "}
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

export default Login