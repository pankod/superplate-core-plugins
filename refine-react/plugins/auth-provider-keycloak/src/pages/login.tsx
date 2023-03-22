import { useTranslate, useLogin } from "@refinedev/core";
<%_ if (answers["ui-framework"] === "antd") { _%>
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

export const Login: React.FC = () => {
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
                        Sign in
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
};
