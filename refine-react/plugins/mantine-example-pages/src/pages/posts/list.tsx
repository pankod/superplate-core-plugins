import React from "react";
import {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        useTranslate,
    <%_ } _%>
    useMany,
} from "@pankod/refine-core";
import { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";
import {
    Box,
    Group,
    List,
    ScrollArea,
    Select,
    Table,
    Pagination,
    EditButton,
    DeleteButton,
    DateField,
} from "@pankod/refine-mantine";

import { ColumnFilter, ColumnSorter } from "components/table";
import { ICategory, FilterElementProps, IPost } from "interfaces";


export const PostList: React.FC = () => {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>

    const columns = React.useMemo<ColumnDef<IPost>[]>(
        () => [
            {
                id: "id",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                header: "ID",
                <%_ } else { _%>
                header: t("posts.fields.id"),
                <%_ } _%>
                accessorKey: "id",
            },
            {
                id: "title",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                header: "Title", 
                    <%_ } else { _%>
                header: t("posts.fields.title"),
                <%_ } _%>
                accessorKey: "title",
                meta: {
                    filterOperator: "contains",
                },
            },
            {
                id: "status",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                header: "Status",
                <%_ } else { _%>
                header: t("posts.fields.status.title"),
                <%_ } _%>
                accessorKey: "status",
                meta: {
                    filterElement: function render(props: FilterElementProps) {
                        return (
                            <Select
                                defaultValue="published"
                                data={[
                                    { label: "Published", value: "published" },
                                    { label: "Draft", value: "draft" },
                                    { label: "Rejected", value: "rejected" },
                                ]}
                                {...props}
                            />
                        );
                    },
                    filterOperator: "eq",
                },
            },
            {
                id: "createdAt",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    header: "Created At",
                <%_ } else { _%>
                    header: t("posts.fields.createdAt"),
                <%_ } _%>
                accessorKey: "createdAt",
                cell: function render({ getValue }) {
                    return (
                        <DateField value={getValue() as string} format="LLL" />
                    );
                },
                enableColumnFilter: false,
            },
            {
                id: "actions",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    header: "Actions",
                <%_ } else { _%>
                    header: t("table.actions"),
                <%_ } _%>
                accessorKey: "id",
                enableColumnFilter: false,
                enableSorting: false,
                cell: function render({ getValue }) {
                    return (
                        <Group spacing="xs" noWrap>
                            <EditButton
                                hideText
                                recordItemId={getValue() as number}
                            />
                            <DeleteButton
                                hideText
                                recordItemId={getValue() as number}
                            />
                        </Group>
                    );
                },
            },
        ],
        [],
    );

    const {
        getHeaderGroups,
        getRowModel,
        refineCore: { setCurrent, pageCount, current },
    } = useTable({
        columns,
    });

    return (
        <ScrollArea>
            <List>
                <Table highlightOnHover>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th key={header.id}>
                                            {!header.isPlaceholder && (
                                                <Group spacing="xs" noWrap>
                                                    <Box>
                                                        {flexRender(
                                                            header.column
                                                                .columnDef
                                                                .header,
                                                            header.getContext(),
                                                        )}
                                                    </Box>
                                                    <Group spacing="xs" noWrap>
                                                        <ColumnSorter
                                                            column={
                                                                header.column
                                                            }
                                                        />
                                                        <ColumnFilter
                                                            column={
                                                                header.column
                                                            }
                                                        />
                                                    </Group>
                                                </Group>
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel().rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext(),
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <br />
                <Pagination
                    position="right"
                    total={pageCount}
                    page={current}
                    onChange={setCurrent}
                />
            </List>
        </ScrollArea>
    );
};
