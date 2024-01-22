import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    MarkdownField,
    ShowButton,
    useTable,
} from "@refinedev/antd";
import { BaseRecord, IResourceComponentsProps, useMany } from "@refinedev/core";
import { Space, Table } from "antd";
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
import { BLOG_POSTS_QUERY } from "../../src/queries/blog-posts";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POSTS_LIST_QUERY } from  "../../src/queries/blog-posts";
<%_ } _%>

export default function BlogPostList() {
    const { tableProps } = useTable({
        syncWithLocation: true,
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
            gqlQuery: POSTS_LIST_QUERY,
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-supabase") { _%>
        meta: {
            select: '*, categories(id,title)',
        },
<%_ } _%>
    });

<%_ if (!isGraphQL) { _%>
    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids: tableProps?.dataSource?.map((item) => item?.<%- blogPostCategoryFieldName %>?.id).filter(Boolean) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });
<%_ } _%>

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title={"ID"} />
                <Table.Column dataIndex="title" title={"Title"} />
                <Table.Column
                    dataIndex="content"
                    title={"Content"}
                    render={(value: any) => {
                        if (!value) return '-'
                        return <MarkdownField value={value.slice(0, 80) + '...'} />
                    }}
                />
                <Table.Column
                    dataIndex={<%- blogPostCategoryTableField %>}
                    title={"Category"}
                    <%_ if (!isGraphQL) { _%>
                    render={(value) =>
                            categoryIsLoading ? (
                                <>Loading...</>
                            ) : (
                                categoryData?.data?.find(
                                    (item) => item.id === value?.id,
                                )?.title
                            )
                    }
                    <%_ } _%>
                />
                <Table.Column dataIndex="status" title={"Status"} />
                <Table.Column
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>  
                    dataIndex={["created_at"]}      
<%_ } else { _%>
                    dataIndex={["createdAt"]}
<%_ } _%>        
                    title={"Created at"}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    title={"Actions"}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

// export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
//     <%_ if (_app.isNextAuthCheck) { _%>
//       const session = await getServerSession(
//         context.req,
//         context.res,
//         authOptions,
//     );
//     <%_ } _%>

//     <%_ if (_app.isAuthProviderCheck) { _%>
//     const { authenticated, redirectTo } = await authProvider.check(context);
//     <%_ } _%>

//     <%_ if (_app.isNextAuthCheck) { _%>
//     if (!session) {
//         return {
//             props: {
//             },
//             redirect: {
//                 destination: `/login?to=${encodeURIComponent("/blog-posts")}`,
//                 permanent: false,
//             },
//         };
//     }
//     <%_ } _%>

//     <%_ if (_app.isAuthProviderCheck) { _%>
//     if (!authenticated) {
//         return {
//             props: {
         
//             },
//             redirect: {
//                 destination: `${redirectTo}?to=${encodeURIComponent("/blog-posts")}`,
//                 permanent: false,
//             },
//         };
//     }
//     <%_ } _%>

//     return {
//         props: {
         
//         },
//     };
// };