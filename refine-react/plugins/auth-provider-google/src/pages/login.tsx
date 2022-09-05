import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
<%_ if (answers["ui-framework"] === "antd") { _%>
    import { 
        AntdLayout, 
    } from "@pankod/refine-antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === "mui") { _%>
    import { 
        Container, Box 
    } from "@pankod/refine-mui";
<%_ } _%>

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>();

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: "your-client-id",
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "filled_blue",
                    size: "medium",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
        }, []); // you can also add your client id as dependency here

        return <div ref={divRef} />;
    };

    <%_ if (answers["ui-framework"] === "antd") { _%>
    return (
        <AntdLayout
            style={{
                background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
                backgroundSize: "cover",
            }}
        >
            <div style={{ height: "100vh", display: "flex" }}>
                <div style={{ margin: "auto" }}>
                    <div style={{ marginBottom: "28px" }}>
                        <img src="./refine.svg" alt="Refine" />
                    </div>
                    <GoogleButton />
                </div>
            </div>
        </AntdLayout>
    );
    <% } else if (answers["ui-framework"] === "mui") { _%>
    return (
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
                    <GoogleButton />
                </Box>
            </Box>
        </Container>
    </Box>
    );
    <%_ } else {_%>
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        <GoogleButton />
        </div>
    );
    <%_ } _%>   
};
