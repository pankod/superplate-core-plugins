import React from "react";
import {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        useTranslate,
    <%_ } _%>
    Option, 
    useSelect,
} from "@pankod/refine-core";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    List,
    Stack,
    EditButton,
    DeleteButton,
    GridValueFormatterParams,
} from "@pankod/refine-mui";

import { ICategory, IPost } from "interfaces";

export const PostList: React.FC = () => {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>

    const { dataGridProps } = useDataGrid<IPost>();

    const {
        options,
        queryResult: { isLoading },
    } = useSelect<ICategory>({
        resource: "categories",
        hasPagination: false,
    });

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
            { 
                field: "title", 
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                headerName: "Title", 
                <%_ } else { _%>
                headerName: t("posts.fields.title"),
                <%_ } _%>
                minWidth: 400, 
                flex: 1 
            },
            {
                field: "category.id",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    headerName: "Category",
                <%_ } else { _%>
                    headerName: t("posts.fields.category.title"),
                <%_ } _%>
                type: "singleSelect",
                headerAlign: "left",
                align: "left",
                minWidth: 250,
                flex: 0.5,
                valueOptions: options,
                valueFormatter: (params: GridValueFormatterParams<Option>) => {
                    return params.value;
                },
                renderCell: function render({ row }) {
                    if (isLoading) {
                        return "Loading...";
                    }

                    const category = options.find(
                        (item) =>
                            item.value.toString() ===
                            row.category.id.toString(),
                    );
                    return category?.label;
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
                flex: 0.3,
                type: "singleSelect",
                valueOptions: ["draft", "published", "rejected"],
            },
            {
                field: "actions",
                type: "actions",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    headerName: "Actions",
                <%_ } else { _%>
                    headerName: t("table.actions"),
                <%_ } _%>
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
        [
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
            t,
            <%_ } _%> 
            options,
            isLoading
        ]
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
