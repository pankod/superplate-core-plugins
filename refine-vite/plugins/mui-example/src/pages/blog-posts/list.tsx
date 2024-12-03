import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    useDataGrid,
} from "@refinedev/mui";
import { Typography } from '@mui/material'
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POSTS_LIST_QUERY } from './queries'
<%_ } _%>

    
export const BlogPostList = () => {
    const { dataGridProps } = useDataGrid({
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

<%_ if (!isGraphQL && answers["data-provider"] !== "data-provider-appwrite") { _%>
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
                display: "flex",
                align: 'left',
                headerAlign: 'left',
            },
            {
                field: "title",
                headerName: "Title",
                minWidth: 200,
                display: "flex",
            },
            {
                field: "content",
                flex: 1,
                headerName: "Content",
                minWidth: 250,
                display: "flex",
                renderCell: function render({ value }) {
                    if (!value) return '-'
                    return (
                        <Typography component='p' whiteSpace='pre' overflow='hidden' textOverflow='ellipsis'>
                            {value}
                        </Typography>
                    );
                },
            },
            {
                field:  <%- blogPostCategoryTableField %>,
                headerName: "Category",
                minWidth: 160,
                display: "flex",
                <%_ if (isGraphQL || answers["data-provider"] === "data-provider-appwrite") { _%>
                valueGetter: (_, row) => {
                      const value = row?.<%- blogPostCategoryFieldName %>?.title
                       return value
                },
                <%_ } else { _%>
                valueGetter: (_, row) => {
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
                headerName: "Status",
                minWidth: 80,
                display: "flex",
            },
            {
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>  
                    field: "created_at",   
<%_ } else if (answers["data-provider"] === "data-provider-appwrite") { _%>  
                    field: "$createdAt",   
<%_ } else { _%>
                    field: "createdAt",
<%_ } _%>        
                headerName: "Created at",
                minWidth: 120,
                display: "flex",
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: 'actions',
                headerName: 'Actions',
                align: 'right',
                headerAlign: 'right',
                minWidth: 120,
                sortable: false,
                display: 'flex',
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />
                            <ShowButton hideText recordItemId={row.id} />
                            <DeleteButton hideText recordItemId={row.id} />
                        </>
                    );
                },
            },
        ],
        <%_ if (isGraphQL || answers["data-provider"] === "data-provider-appwrite") { _%>
            [],
        <%_ } else { _%>
            [categoryData, categoryIsLoading],
        <%_ } _%>

        
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} />
        </List>
    );
};
