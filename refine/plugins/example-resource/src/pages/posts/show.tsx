import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
    <%_ if (i18n === "i18n") { _%>
        useTranslate,
    <%_ } _%>
} from "@pankod/refine";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {

    <%_ if (i18n === "i18n") { _%>
        const t = useTranslate();
    <%_ } _%>
    
    const { queryResult } = useShow<IPost>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>(
        "categories",
        record?.category.id ?? "",
        {
            enabled: !!record?.category.id,
        },
    );

    return (
        <Show isLoading={isLoading}>
            <Title level={5}> 
            <%_ if (i18n !== "i18n") { _%>
                    Title
                    <%_ } else { _%>
                    {t("posts.fields.title")}
                    <%_ } _%>
            </Title>
            <Text>{record?.title}</Text>

            <Title level={5}>
            <%_ if (i18n !== "i18n") { _%>
                    Status
                    <%_ } else { _%>
                    {t("posts.fields.status.title")}
                    <%_ } _%>
            </Title>
            <Text>
                <Tag>{record?.status}</Tag>
            </Text>

            <Title level={5}>
                
            <%_ if (i18n !== "i18n") { _%>
                    Category
                <%_ } else { _%>
                    {t("posts.fields.category.title")}
                <%_ } _%>
                </Title>
            <Text>{categoryData?.data.title}</Text>

            <Title level={5}>
                
                <%_ if (i18n !== "i18n") { _%>
                        Content
                    <%_ } else { _%>
                        {t("posts.fields.content")}
                    <%_ } _%>
            </Title>
            <MarkdownField value={record?.content} />
        </Show>
    );
};
