import {
    DateField,
    MarkdownField,
    NumberField,
    Show,
    TextField,
} from "@refinedev/antd";
import { IResourceComponentsProps, useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_SHOW_QUERY } from './queries'
<%_ } _%>

const { Title } = Typography;

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
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
    });
    const { data, isLoading } = queryResult;

    const record = data?.data;

<%_ if (!isGraphQL) { _%>
    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: record?.category?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });
<%_ } _%>


    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{"Title"}</Title>
            <TextField value={record?.title} />
            <Title level={5}>{"Content"}</Title>
            <MarkdownField value={record?.content} />
            <Title level={5}>{"Category"}</Title>
<%_ if (isGraphQL) { _%>  
            <TextField value={record?.category?.title} />
<%_ } else { _%>
            <TextField value={categoryIsLoading ? (
                <>Loading...</>
            ) : (
                <>{categoryData?.data?.title}</>
            )} />
<%_ } _%>  
            <Title level={5}>{"Status"}</Title>
            <TextField value={record?.status} />
            <Title level={5}>{"CreatedAt"}</Title>
            <DateField value={record?.createdAt} />
        </Show>
    );
};
