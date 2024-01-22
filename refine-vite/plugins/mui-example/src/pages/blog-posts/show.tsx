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
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_SHOW_QUERY } from './queries'
<%_ } _%>

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
<%_ if (isGraphQL) { _%>  
                    <div>{record?.category?.title}</div>
<%_ } else { _%>
                    {categoryIsLoading ? (
                        <>Loading...</>
                    ) : (
                        <>{categoryData?.data?.title}</>
                    )}
<%_ } _%>  
                <Typography variant="body1" fontWeight="bold">
                    {"Status"}
                </Typography>
                <TextField value={record?.status} />
                <Typography variant="body1" fontWeight="bold">
                    {"CreatedAt"}
                </Typography>
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>  
                <DateField value={record?.created_at} />
<%_ } else { _%>
                <DateField value={record?.createdAt} />
<%_ } _%>      
            </Stack>
        </Show>
    );
};
