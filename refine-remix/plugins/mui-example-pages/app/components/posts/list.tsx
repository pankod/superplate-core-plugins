import React from "react";
import { useLoaderData } from "@remix-run/react";
import { useMany } from "@pankod/refine-core";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    List,
    Stack,
    EditButton,
    DeleteButton,
} from "@pankod/refine-mui";

import { IPost, ICategory } from "~/interfaces";

export const PostList: React.FC = () => {
    const { initialData } = useLoaderData();

    const { dataGridProps } = useDataGrid<IPost>({
        queryOptions: {
            initialData,
        },
    });

    const categoryIds = dataGridProps.rows.map((item) => item.category.id);
    const { data: categoriesData, isLoading } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const columns = React.useMemo<GridColumns<IPost>>(
        () => [
            {
                field: "id",
                headerName: "ID",
                type: "number",
                width: 50,
            },
            {
                field: "title",
                headerName: "Title",
                minWidth: 400,
                flex: 1,
            },
            {
                field: "category.id",
                headerName: "Category",
                type: "number",
                headerAlign: "left",
                align: "left",
                minWidth: 250,
                flex: 0.5,
                renderCell: function render({ row }) {
                    if (isLoading) {
                        return "Loading...";
                    }

                    const category = categoriesData?.data.find(
                        (item) => item.id === row.category.id,
                    );
                    return category?.title;
                },
            },
            {
                field: "status",
                headerName: "Status",
                minWidth: 120,
                flex: 0.3,
            },
            {
                field: "actions",
                type: "actions",
                headerName: "Actions",
                renderCell: function render({ row }) {
                    return (
                        <Stack direction="row" spacing={1}>
                            <EditButton
                                size="small"
                                hideText
                                recordItemId={row.id}
                            />
                            <DeleteButton
                                size="small"
                                hideText
                                recordItemId={row.id}
                            />
                        </Stack>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [categoriesData, isLoading],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
