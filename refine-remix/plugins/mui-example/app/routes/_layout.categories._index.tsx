import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    useDataGrid,
} from "@refinedev/mui";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "../queries/categories";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { CATEGORIES_LIST_QUERY } from  "../queries/categories";
<%_ } _%>

export default function CategoryList() {
    const { dataGridProps } = useDataGrid({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: CATEGORIES_QUERY,
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        meta: {
            gqlQuery: CATEGORIES_LIST_QUERY,
        },
<%_ } _%>
    });

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
        [],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
