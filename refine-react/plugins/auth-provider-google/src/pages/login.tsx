import { 
    useLogin,
    <%_ if (i18n !== "no") { _%>
    useTranslate,
    <%_ } _%>
} from "@pankod/refine-core";
<%_ if (answers["ui-framework"] === "antd") { _%>
    import { 
        AntdLayout, 
        Button,
        Icons,
    } from "@pankod/refine-antd";
<%_ } _%> 

import { useGoogleLogin, GoogleLoginResponse } from "react-google-login";

<%_ if (answers["ui-framework"] === "antd") { _%>
const { GoogleOutlined } = Icons;
<%_ } _%> 

export const Login: React.FC = () => {
    const { mutate: login, isLoading } = useLogin<GoogleLoginResponse>();

    <%_ if (i18n !== "no") { _%>
    const t = useTranslate();
    <%_ } _%>

    const { signIn } = useGoogleLogin({
        onSuccess: (response) => login(response as GoogleLoginResponse),
        clientId: "your-client-id",
        isSignedIn: true,
        cookiePolicy: "single_host_origin",
    });

    <%_ if (answers["ui-framework"] === "antd") { _%>
    return (
        <AntdLayout
            style={{
                background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
                backgroundSize: "cover",
            }}
        >
            <div style={{ height: "100vh", display: "flex" }}>
                <div style={{ maxWidth: "200px", margin: "auto" }}>
                    <div style={{ marginBottom: "28px" }}>
                        <img src="./refine.svg" alt="Refine" />
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        block
                        icon={<GoogleOutlined />}
                        loading={isLoading}
                        onClick={() => signIn()}
                    >
                        <%_ if (i18n !== "no") { _%>
                        {t("pages.login.signin", "Sign in")}
                        <%_ } else { _%>
                        Sign in
                        <%_ } _%>
                    </Button>
                </div>
            </div>
        </AntdLayout>    
    );
    <%_ } else {_%>
        return(
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <button onClick={() => signIn()}>
                    <%_ if (i18n !== "no") { _%>
                    {t("pages.login.signin", "Sign in")}
                    <%_ } else { _%>
                        Sign in with Google
                    <%_ } _%>
                </button>
            </div>
        );
    <%_ } _%>   
};
