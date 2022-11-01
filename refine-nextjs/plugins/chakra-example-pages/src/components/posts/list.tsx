import React from "react";
import {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    useTranslate,
    <%_ } _%>
    GetManyResponse,
    useMany, 
} from "@pankod/refine-core";
import { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";
import {
    List,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    HStack,
    Text,
    ShowButton,
    EditButton,
    DeleteButton,
    Select,
    DateField,
} from "@pankod/refine-chakra-ui";

import { ColumnFilter, ColumnSorter } from "@components/table";
import { Pagination } from "@components/pagination";
import { FilterElementProps, ICategory, IPost } from "src/interfaces";

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
                enableColumnFilter: false,
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
                                borderRadius="md"
                                size="sm"
                                {...props}
                            >
                                <option value="published">published</option>
                                <option value="draft">draft</option>
                                <option value="rejected">rejected</option>
                            </Select>
                        );
                    },
                    filterOperator: "eq",
                },
            },
            {
                id: "category.id",
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    header: "Category",
                <%_ } else { _%>
                    header: t("posts.fields.category.title"),
                <%_ } _%>
                enableColumnFilter: false,
                accessorKey: "category.id",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        categoriesData: GetManyResponse<ICategory>;
                    };
                    const category = meta.categoriesData?.data.find(
                        (item) => item.id === getValue(),
                    );
                    return category?.title ?? "Loading...";
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
                        <HStack>
                            <ShowButton
                                hideText
                                size="sm"
                                recordItemId={getValue() as number}
                            />
                            <EditButton
                                hideText
                                size="sm"
                                recordItemId={getValue() as number}
                            />
                            <DeleteButton
                                hideText
                                size="sm"
                                recordItemId={getValue() as number}
                            />
                        </HStack>
                    );
                },
            },
        ],
        [
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
            t,
            <%_ } _%> 
        ]
    );

    const {
        getHeaderGroups,
        getRowModel,
        setOptions,
        refineCore: {
            setCurrent,
            pageCount,
            current,
            tableQueryResult: { data: tableData },
        },
    } = useTable({
        columns,
        refineCoreProps: {
            initialSorter: [
                {
                    field: "id",
                    order: "desc",
                },
            ],
        },
    });

    const categoryIds = tableData?.data?.map((item) => item.category.id) ?? [];
    const { data: categoriesData } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    setOptions((prev) => ({
        ...prev,
        meta: {
            ...prev.meta,
            categoriesData,
        },
    }));

    return (
        <List>
            <TableContainer whiteSpace="pre-line">
                <Table variant="simple">
                    <Thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <Th key={header.id}>
                                        {!header.isPlaceholder && (
                                            <HStack spacing="2">
                                                <Text>
                                                    {flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext(),
                                                    )}
                                                </Text>
                                                <HStack spacing="2">
                                                    <ColumnSorter
                                                        column={header.column}
                                                    />
                                                    <ColumnFilter
                                                        column={header.column}
                                                    />
                                                </HStack>
                                            </HStack>
                                        )}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {getRowModel().rows.map((row) => (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <Td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Pagination
                current={current}
                pageCount={pageCount}
                setCurrent={setCurrent}
            />
        </List>
    );
};
