<%_ if (answers["ui-framework"] === 'antd') { _%>
     import { AuthPage } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { AuthPage } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mantine') { _%>
     import { AuthPage } from "@refinedev/mantine";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'chakra') { _%>
     import { AuthPage } from "@refinedev/chakra-ui";
 <%_ } _%>
 <%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>

export default function Login() {
    return (
        <AuthPage
            type="login"
            <%_ if (answers["ui-framework"] === 'antd' || answers["ui-framework"] === 'mantine') { _%>
                formProps={{
                    initialValues: {
                        email: "info@refine.dev",
                        password: "refine-supabase",
                    },
                }}
            <%_ } _%>
            <%_ if (answers["ui-framework"] === 'mui' || answers["ui-framework"] === 'chakra') { _%>
                formProps={{
                    defaultValues: {
                        email: "info@refine.dev",
                        password: "refine-supabase",
                    },
                }}
            <%_ } _%>
            
        />
    );
}
