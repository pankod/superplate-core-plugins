import React from "react";
import {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
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
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>

    const getOne = React.useCallback(useOne, []);
    const columns = React.useMemo<GridColumns<IPost>>(
        () => [
            {
                field: "id",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
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
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
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
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    headerName: "Status",
                <%_ } else { _%>
                    headerName: t("posts.fields.status.title"),
                <%_ } _%>
                minWidth: 120, 
                flex: 0.3
            },
            {
                field: "actions",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
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
        [
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
            t,
            <%_ } _%> 
            getOne
        ]
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
