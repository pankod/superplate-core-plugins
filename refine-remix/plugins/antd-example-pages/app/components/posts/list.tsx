import { useLoaderData } from "@remix-run/react";
import { IResourceComponentsProps, useMany } from "@pankod/refine-core";
import {
    List,
    Table,
    TextField,
    useTable,
    getDefaultSortOrder,
    DateField,
    Space,
    EditButton,
    DeleteButton,
    useSelect,
    TagField,
    FilterDropdown,
    Select,
    ShowButton,
} from "@pankod/refine-antd";
import type { IPost, ICategory } from "~/interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const { initialData } = useLoaderData();

    const { tableProps, sorter } = useTable<IPost>({
        queryOptions: {
            initialData,
        },
    });

    const categoryIds =
        tableProps?.dataSource?.map((item) => item.category.id) ?? [];
    const { data: categoriesData, isLoading } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    key="id"
                    title="ID"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="title"
                    key="title"
                    title="Title"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("title", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="status"
                    key="status"
                    title="Status"
                    render={(value) => <TagField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("status", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="createdAt"
                    key="createdAt"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex={["category", "id"]}
                    title="Category"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }

                        return (
                            <TextField
                                value={
                                    categoriesData?.data.find(
                                        (item) => item.id === value,
                                    )?.title
                                }
                            />
                        );
                    }}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectProps}
                            />
                        </FilterDropdown>
                    )}
                />
                <Table.Column<IPost>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
