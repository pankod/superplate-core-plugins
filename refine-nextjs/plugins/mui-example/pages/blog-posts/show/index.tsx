import { Stack, Typography } from "@mui/material";
import { IResourceComponentsProps, useOne, useShow } from "@refinedev/core";
import {
    DateField,
    MarkdownField,
    NumberField,
    Show,
    TextFieldComponent as TextField,
} from "@refinedev/mui";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from "../../../src/queries/blog-posts";
<%_ } _%>


export default function BlogPostShow() {
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
    });

    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: record?.category?.id || "",
        queryOptions: {
            enabled: !!record,
        },
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
            meta: {
                fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
            },
<%_ } _%>
    });

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    {"ID"}
                </Typography>
                <NumberField value={record?.id ?? ""} />

                <Typography variant="body1" fontWeight="bold">
                    {"Title"}
                </Typography>
                <TextField value={record?.title} />

                <Typography variant="body1" fontWeight="bold">
                    {"Content"}
                </Typography>
                <MarkdownField value={record?.content} />

                <Typography variant="body1" fontWeight="bold">
                    {"Category"}
                </Typography>
                {categoryIsLoading ? (
                    <>Loading...</>
                ) : (
                    <>{categoryData?.data?.title}</>
                )}

                <Typography variant="body1" fontWeight="bold">
                    {"Status"}
                </Typography>
                <TextField value={record?.status} />

                <Typography variant="body1" fontWeight="bold">
                    {"CreatedAt"}
                </Typography>
                <DateField value={record?.createdAt} />
            </Stack>
        </Show>
    );
};
