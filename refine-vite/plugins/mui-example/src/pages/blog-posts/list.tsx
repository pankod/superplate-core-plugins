import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    MarkdownField,
    ShowButton,
    useDataGrid,
} from "@refinedev/mui";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POSTS_LIST_QUERY } from './queries'
<%_ } _%>

    
export const BlogPostList = () => {
    const { dataGridProps } = useDataGrid({
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
        ids: dataGridProps?.rows?.map((item: any) => item?.<%- blogPostCategoryFieldName %>?.id).filter(Boolean) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });
<%_ } _%>

    const columns = React.useMemo<GridColDef[]>(
        () => [
            {
                field: "id",
                headerName: "ID",
                type: "number",
                minWidth: 50,
            },
            {
                field: "title",
                flex: 1,
                headerName: "Title",
                minWidth: 200,
            },
            {
                field: "content",
                flex: 1,
                headerName: "content",
                minWidth: 250,
                renderCell: function render({ value }) {
                    if (!value) return '-'
                    return (
                        <MarkdownField value={value?.slice(0, 80) + "..." || ""} />
                    );
                },
            },
            {
                field:  <%- blogPostCategoryTableField %>,
                flex: 1,
                headerName: "Category",
                minWidth: 300,
                <%_ if (isGraphQL) { _%>
                valueGetter: ({ row }) => {
                      const value = row?.<%- blogPostCategoryFieldName %>?.title
                       return value
                },
                <%_ } else { _%>
                valueGetter: ({ row }) => {
                    const value = row?.<%- blogPostCategoryFieldName %>;
                    return value;
                },
                renderCell: function render({ value }) {
                    return categoryIsLoading ? (
                        <>Loading...</>
                    ) : (
                        categoryData?.data?.find((item) => item.id === value?.id)?.title
                        );
                    },
                <%_ } _%>
            },
            {
                field: "status",
                flex: 1,
                headerName: "Status",
                minWidth: 200,
            },
            {
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>  
                    field: "created_at",       
<%_ } else { _%>
                    field: "createdAt",
<%_ } _%>        
                flex: 1,
                headerName: "Created at",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "actions",
                headerName: "Actions",
                sortable: false,
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />
                            <ShowButton hideText recordItemId={row.id} />
                            <DeleteButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        <%_ if (isGraphQL) { _%>
            [],
        <%_ } else { _%>
            [categoryData],
        <%_ } _%>

        
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
