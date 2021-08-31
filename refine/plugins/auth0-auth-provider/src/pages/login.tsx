import { 
    AntdLayout, 
    Button, 
    useLogin,
    <%_ if (i18n === "i18n") { _%>
    useTranslate,
    <%_ } _%>  
} from "@pankod/refine";

export const Login: React.FC = () => {
    const { mutate: login, isLoading } = useLogin();

    <%_ if (i18n === "i18n") { _%>
    const t = useTranslate();
    <%_ } _%>

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
                        loading={isLoading}
                        onClick={() => login({})}
                    >
                        <%_ if (i18n === "i18n") { _%>
                        {translate("pages.login.signin", "Sign in")}
                        <%_ } else { _%>
                        Sign in
                        <%_ } _%>
                    </Button>
                </div>
            </div>
        </AntdLayout>
    );
};
