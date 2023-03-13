import { <%- (_app.inferencer.componentPrefix || "") _%>EditInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { GetServerSideProps } from "next";
import { authProvider } from "src/authProvider";
<%_ } _%>

export default function PostList() {
    return <<%- (_app.inferencer.componentPrefix || "") _%>EditInferencer />;
}

<%_ if (answers["auth-provider"] !== 'none') { _%>
export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const { authenticated, redirectTo } = await authProvider.check(context);

    if (!authenticated) {
        return {
            props: {},
            redirect: {
                destination: redirectTo,
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
<%_ } _%>