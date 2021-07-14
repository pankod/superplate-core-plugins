import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    DateField,
    Space,
    EditButton,
    DeleteButton,
    <%_ if (i18n === "i18n") { _%>
    useTranslate,
    <%_ } _%>
} from "@pankod/refine";
import { IPost } from "interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorter } = useTable<IPost>({
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
    });

    <%_ if (i18n === "i18n") { _%>
    const t = useTranslate();
    <%_ } _%>
    

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title="ID"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="title"
                    <%_ if (i18n !==  "i18n") { _%>
                    title="Title"
                    <%_ } else { _%>
                    title={t("posts.fields.title")}
                    <%_ } _%>

                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("title", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="createdAt"
                    <%_ if (i18n !==  "i18n") { _%>
                    title="Created At"
                    <%_ } else { _%>
                    title={t("posts.fields.createdAt")}
                    <%_ } _%>
                    render={(value) => (
                        <DateField value={value} format="YYYY-MM-DD HH:mm:ss" />
                    )}
                    sorter
                />
                <Table.Column<IPost>
                    <%_ if (i18n !==  "i18n") { _%>
                    title="Actions"
                    <%_ } else { _%>
                    title={t("table.actions")}
                    <%_ } _%>
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton size="small" recordItemId={record.id} />
                            <DeleteButton
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
