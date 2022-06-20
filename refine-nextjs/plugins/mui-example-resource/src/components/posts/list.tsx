import React from "react";
import {
    <%_ if (i18n !== "no") { _%>
        useTranslate,
    <%_ } _%>
    useOne
} from "@pankod/refine-core";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    List,
    EditButton,
} from "@pankod/refine-mui";

import { ICategory, IPost } from "src/interfaces";

export const PostList: React.FC = () => {
    <%_ if (i18n !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>

    const getOne = React.useCallback(useOne, []);
    const columns = React.useMemo<GridColumns<IPost>>(
        () => [
            {
                field: "id",
                <%_ if (i18n === "no") { _%>
                    headerName: "ID",
                <%_ } else { _%>
                    headerName: t("posts.fields.id"),
                <%_ } _%>
                type: "number",
                width: 50,
            },
            { field: "title", headerName: "Title", minWidth: 400, flex: 1 },
            {
                field: "category.id",
                <%_ if (i18n === "no") { _%>
                    headerName: "Category",
                <%_ } else { _%>
                    headerName: t("posts.fields.category.title"),
                <%_ } _%>
                type: "number",
                headerAlign: "left",
                align: "left",
                minWidth: 250,
                flex: 0.5,
                valueGetter: ({ row }) => {
                    const { data } = getOne<ICategory>({
                        resource: "categories",
                        id: row.category.id,
                    });
                    return data?.data.title;
                },
            },
            { 
                field: "status", 
                <%_ if (i18n === "no") { _%>
                    headerName: "Status",
                <%_ } else { _%>
                    headerName: t("posts.fields.status.title"),
                <%_ } _%>
                minWidth: 120, 
                flex: 0.3
            },
            {
                field: "actions",
                <%_ if (i18n === "no") { _%>
                    headerName: "Actions",
                <%_ } else { _%>
                    headerName: t("table.actions"),
                <%_ } _%>
                renderCell: function render({ row }) {
                    return <EditButton hideText recordItemId={row.id} />;
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [t, getOne]
    );

    const { dataGridProps } = useDataGrid<IPost>({
        columns,
    });

    return (
        <List>
            <DataGrid {...dataGridProps} autoHeight />
        </List>
    );
};
