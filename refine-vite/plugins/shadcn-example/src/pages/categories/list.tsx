import { type BaseRecord } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { ListView } from "@/components/refine-ui/views/list-view";
import { EditButton } from "@/components/refine-ui/buttons/edit";
import { ShowButton } from "@/components/refine-ui/buttons/show";
import { DeleteButton } from "@/components/refine-ui/buttons/delete";

<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
import { CATEGORIES_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
import { CATEGORIES_LIST_QUERY } from './queries'
<%_ } _%>

type Category = {
    id: string;
    title: string;
};

export const CategoryList = () => {
    const columns = React.useMemo(() => {
        const columnHelper = createColumnHelper<Category>();

        return [
            columnHelper.accessor("id", {
                id: "id",
                header: "ID",
                enableSorting: false,
            }),
            columnHelper.accessor("title", {
                id: "title",
                header: "Title",
                enableSorting: true,
            }),
            columnHelper.display({
                id: "actions",
                header: "Actions",
                cell: ({ row }) => (
                    <div className="flex gap-2">
                        <EditButton recordItemId={row.original.id}  size="sm" />
                        <ShowButton recordItemId={row.original.id}  size="sm" />
                        <DeleteButton recordItemId={row.original.id}  size="sm" />
                    </div>
                ),
                enableSorting: false,
                size: 290,
            }),
        ];
    }, []);

    const table = useTable({
        columns,
        refineCoreProps: {
            syncWithLocation: true,
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
        },
    });

    return (
        <ListView>
            <DataTable table={table} />
        </ListView>
    );
};