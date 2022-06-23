<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { 
    useTranslate,
} from "@pankod/refine-core";
<%_ } _%>  
<%_ if (answers["ui-framework"] === "antd") { _%>
import { 
    AntdLayout, 
    Button
} from "@pankod/refine-antd";
<%_ } _%> 

import { useAuth0 } from "@auth0/auth0-react";

export const Login: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const t = useTranslate();
    <%_ } _%>

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
                        onClick={() => loginWithRedirect()}
                    >
                        <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
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
                <button onClick={() => loginWithRedirect()}>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                    {t("pages.login.signin", "Sign in")}
                    <%_ } else { _%>
                        Sign in with Auth0
                    <%_ } _%>
                </button>
            </div>
        );
    <%_ } _%> 
};
