import {
    useTable,
    List,
    Table,
    Space,
    EditButton,
    ShowButton,
    useMany,
    TextField,
    useTranslate,
} from "@pankod/refine";
import { ICategory, IPost } from "../../interfaces";

export const PostList: React.FC = () => {
    const translate = useTranslate();

    const { tableProps } = useTable<IPost>();

    const categoryIds =
        tableProps?.dataSource?.map((item) => item.
        <%_ if (answers.dataProvider === 'supabase-data-provider') { _%>
            categoryId)
        <%_ } else { _%>
            category.id)
        <%_ } _%>
            ?? [];
    const { data, isLoading } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column
                    dataIndex="title"
                    title={translate("posts.fields.title")}
                />
                <Table.Column
                <%_ if (answers.dataProvider === 'supabase-data-provider') { _%>
                    dataIndex={["categoryId"]}
                <%_ } else { _%>
                    dataIndex={["category", "id"]}
                <%_ } _%>
                    title={translate("posts.fields.category.title")}
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }

                        return (
                            <TextField
                                value={
                                    data?.data.find((item) => item.id === value)
                                        ?.title
                                }
                            />
                        );
                    }}
                />
                <Table.Column<IPost>
                    title={translate("table.actions")}
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <Space>
                                <EditButton
                                    size="small"
                                    recordItemId={record.id}
                                />
                                <ShowButton
                                    size="small"
                                    recordItemId={record.id}
                                />
                            </Space>
                        );
                    }}
                />
            </Table>
        </List>
    );
};
