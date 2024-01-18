import { NumberField, Show, TextField } from "@refinedev/antd";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import { Typography } from "antd";
import React from "react";
import { GetServerSideProps } from "next";
<%_ if (_app.isAuthProviderCheck) { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (_app.isNextAuthCheck) { _%>
    import { getServerSession } from "next-auth";
    import { authOptions } from "pages/api/auth/[...nextauth]";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "../../../src/queries/categories";
<%_ } _%>

const { Title } = Typography;

export default function CategoryShow() {
    const { queryResult } = useShow({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: CATEGORIES_QUERY,
        },
<%_ } _%>
    });
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{"Title"}</Title>
            <TextField value={record?.title} />
        </Show>
    );
};


export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    <%_ if (_app.isNextAuthCheck) { _%>
      const session = await getServerSession(
        context.req,
        context.res,
        authOptions,
    );
    <%_ } _%>

    <%_ if (_app.isAuthProviderCheck) { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (_app.isNextAuthCheck) { _%>
    if (!session) {
        return {
            props: {
            },
            redirect: {
                destination: `/login?to=${encodeURIComponent("/blog-posts")}`,
                permanent: false,
            },
        };
    }
    <%_ } _%>

    <%_ if (_app.isAuthProviderCheck) { _%>
    if (!authenticated) {
        return {
            props: {
         
            },
            redirect: {
                destination: `${redirectTo}?to=${encodeURIComponent("/blog-posts")}`,
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