import {
    useNavigation,
    useOne,
    useResource,
    useShow,
} from "@refinedev/core";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY } from "../queries/blog-posts";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_SHOW_QUERY } from   "../queries/blog-posts";
<%_ } _%>

export default function BlogPostShow() {
    const { edit, list } = useNavigation();
    const { id } = useResource();
    const { queryResult } = useShow({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
            meta: {
                fields: BLOG_POSTS_QUERY,
            },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-strapi-v4") { _%>
            meta: {
                populate: ['category'],
            },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
            meta: {
                gqlQuery: POST_SHOW_QUERY,
            },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-supabase") { _%>
        meta: {
            select: '*, categories(id,title)',
        },
<%_ } _%>
    });
    const { data } = queryResult;

    const record = data?.data;
    
<%_ if (!isGraphQL) { _%>
    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: record?.<%- blogPostCategoryFieldName %>?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });
<%_ } _%>

    return (
        <div style={{ padding: "16px" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h1>{"Show"}</h1>
                <div style={{ display: "flex", gap: "8px" }}>
                    <button onClick={() => list("blog_posts")}>{"List"}</button>
                    <button onClick={() => edit("blog_posts", id ?? "")}>
                        {"Edit"}
                    </button>
                </div>
            </div>
            <div>
                <div style={{ marginTop: "6px" }}>
                    <h5>{"ID"}</h5>
                    <div>{record?.id ?? ""}</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>{"Title"}</h5>
                    <div>{record?.title}</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>{"Content"}</h5>
                    <p>{record?.content}</p>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>{"Category"}</h5>
<%_ if (isGraphQL) { _%>  
                    <div>{record?.<%- blogPostCategoryFieldName %>?.title}</div>
<%_ } else { _%>
                    <div>
                        {categoryIsLoading ? (
                            <>Loading...</>
                        ) : (
                            <>{categoryData?.data?.title}</>
                        )}
                    </div>
<%_ } _%>  
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>{"Status"}</h5>
                    <div>{record?.status}</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>{"Created at"}</h5>
                    <div>
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>  
                    {new Date(record?.created_at).toLocaleString(undefined, {
                            timeZone: "UTC",
                    })}
<%_ } else { _%>
                    {new Date(record?.createdAt).toLocaleString(undefined, {
                        timeZone: "UTC",
                    })}
<%_ } _%>      
                    </div>
                </div>
            </div>
        </div>
    );
};
