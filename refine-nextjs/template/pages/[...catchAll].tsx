<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { ErrorComponent } from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { ErrorComponent } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'no') { _%>
    import { ErrorComponent } from "@refinedev/core";
<%_ } _%>
import { GetServerSideProps } from "next";
<%_ if (_app.isAuthProviderCheck) { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>


export default function CatchAll() {
    return <ErrorComponent />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    <%_ if (_app.isAuthProviderCheck) { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (_app.isAuthProviderCheck) { _%>
    if (!authenticated) {
        return {
            props: {
             
            },
            redirect: {
                destination: `${redirectTo}?to=${encodeURIComponent(
                    context.req.url || "/"
                )}`,
                permanent: false,
            },
        };
    }
    <%_ } _%>

    return {
        props: {
        
        },
    };
};

