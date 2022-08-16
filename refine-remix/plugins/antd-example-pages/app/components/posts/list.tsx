import { useLoaderData } from "@remix-run/react";
import {
    IResourceComponentsProps,
    useMany,
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        useTranslate,
    <%_ } _%>
} from "@pankod/refine-core";
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
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>

    const { initialData } = useLoaderData();


    const { tableProps, sorter } = useTable<IPost>({
        queryOptions: {
            initialData,
        },
    });

    const categoryIds =
        tableProps?.dataSource?.map((item) => item.category.id) ?? [];
    const { data: categoriesData, isLoading } = useMany<ICategory>(
        {
            resource: "categories",
            ids: categoryIds,
            queryOptions: {
                enabled: categoryIds.length > 0,
            }
        }
    );

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
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    title="Title"
                <%_ } else {_%>
                    title={t("posts.fields.title")}
                <%_ } _%>
                render={(value) => <TextField value={value} />}
                defaultSortOrder={getDefaultSortOrder("title", sorter)}
                sorter
                />
                <Table.Column
                    dataIndex="status"
                    key="status"
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    title="Status"
                <%_ } else {_%>
                    title={t("posts.fields.status.title")}
                <%_ } _%>
                render={(value) => <TagField value={value} />}
                defaultSortOrder={getDefaultSortOrder("status", sorter)}
                sorter
                />
                <Table.Column
                    dataIndex="createdAt"
                    key="createdAt"
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    title="Created At"
                <%_ } else {_%>
                    title={t("posts.fields.createdAt")}
                <%_ } _%>
                render={(value) => (
                    <DateField value={value} format="LLL" />
                )}
                defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
                sorter
                />
                <Table.Column
                    dataIndex={["category", "id"]}
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    title="Category"
                <%_ } else {_%>
                    title={t("posts.fields.category.title")}
                <%_ } _%>
                render={(value) => {
                    if (isLoading) {
                        return <TextField
                            <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {
                                _%>
                                value="Loading..."
                                    <%_
                    } else {
                        _%>
                        value={ t("loading") }
                                <%_
                } _%>
                            />;
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
                                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                            placeholder="Select Category"
                        <%_ } else {_%>
                            placeholder={t("posts.fields.category.filter.placeholder")}
                        <%_ } _%>

                        {...categorySelectProps}
                            />
                    </FilterDropdown>
                )}
                />
                <Table.Column<IPost>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    title="Actions"
                <%_ } else {_%>
                    title={t("table.actions")}
                <%_ } _%>
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
