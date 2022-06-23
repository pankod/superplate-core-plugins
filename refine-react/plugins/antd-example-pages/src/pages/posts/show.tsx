import {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        useTranslate,
    <%_ } _%>
    IResourceComponentsProps,
    useOne,
    useShow
} from "@pankod/refine-core";
import {
    Show,
    Typography,
    Tag,
    MarkdownField,
} from "@pankod/refine-antd";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") {
        _%>
        const t = useTranslate();
    <%_
    } _%>
    
    const { queryResult } = useShow<IPost>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>(
        {
            resource: "categories",
            id: record?.category.id ?? "",
            queryOptions: {
                enabled: !!record?.category.id,
            }
        }
    );

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    Title
                    <%_} else {_%>
                        { t("posts.fields.title") }
                        <%_} _%>
            </Title>
            <Text>{record?.title}</Text>

            <Title level={5}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    Status
                    <%_} else {_%>
                        { t("posts.fields.status.title") }
                        <%_} _%>
            </Title>
            <Text>
                <Tag>{record?.status}</Tag>
            </Text>

            <Title level={5}>

                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    Category
                    <%_} else {_%>
                        { t("posts.fields.category.title") }
                        <%_} _%>
            </Title>
            <Text>{categoryData?.data.title}</Text>

            <Title level={5}>

                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") {_%>
                    Content
                    <%_} else {_%>
                        { t("posts.fields.content") }
                        <%_} _%>
            </Title>
            <MarkdownField value={record?.content} />
        </Show>
    );
};
