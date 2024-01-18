import {
    IResourceComponentsProps,
    useNavigation,
    useResource,
    useShow,
} from "@refinedev/core";
import React from "react";
import { GetServerSideProps } from "next";
<%_ if (_app.isAuthProviderCheck) { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (_app.isNextAuthCheck) { _%>
    import { getServerSession } from "next-auth";
    import { authOptions } from "../api/auth/[...nextauth]";
<%_ } _%>
import { Controller } from "react-hook-form";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from "../../../src/queries/blog-posts";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "../../../src/queries/categories";
<%_ } _%>


export default function CategoryShow() {
    const { edit, list } = useNavigation();
    const { id } = useResource();
    const { queryResult } = useShow({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
            meta: {
                fields: CATEGORIES_QUERY,
            },
<%_ } _%>
    });
    const { data } = queryResult;

    const record = data?.data;

    return (
        <div style={{ padding: "16px" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h1>Show</h1>
                <div style={{ display: "flex", gap: "8px" }}>
                    <button onClick={() => list("categories")}>List</button>
                    <button onClick={() => edit("categories", id ?? "")}>
                        Edit
                    </button>
                </div>
            </div>
            <div>
                <div style={{ marginTop: "6px" }}>
                    <h5>ID</h5>
                    <div>{record?.id ?? ""}</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>Title</h5>
                    <div>{record?.title}</div>
                </div>
            </div>
        </div>
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