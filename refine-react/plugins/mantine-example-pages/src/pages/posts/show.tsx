import { 
    useShow, 
    useOne,
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    useTranslate,
    <%_ } _%> } 
from "@pankod/refine-core";
import { Show, Title, Text, MarkdownField } from "@pankod/refine-mantine";

import { ICategory, IPost } from "interfaces";

export const PostShow: React.FC = () => {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>

    const { queryResult } = useShow<IPost>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>({
        resource: "categories",
        id: record?.category.id || "",
        queryOptions: {
            enabled: !!record?.category.id,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title order={5}>
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                Id
            <%_ } else { _%>
                {t("posts.fields.id")}
            <%_ } _%>
            </Title>
            <Text mt="xs">{record?.id}</Text>

            <Title mt="xs" order={5}>
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                Title
            <%_ } else { _%>
                {t("posts.fields.title")}
            <%_ } _%>
            </Title>
            <Text mt="xs">{record?.title}</Text>

            <Title mt="xs" order={5}>
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                Status
            <%_ } else { _%>
                {t("posts.fields.status.title")}
            <%_ } _%>
            </Title>
            <Text mt="xs">{record?.status}</Text>

            <Title mt="xs" order={5}>
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                Category
            <%_ } else { _%>
                {t("posts.fields.category.title")}
            <%_ } _%>
            </Title>
            <Text mt="xs">{categoryData?.data?.title}</Text>

            <Title mt="xs" order={5}>
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                Content
            <%_ } else { _%>
                {t("posts.fields.content")}
            <%_ } _%>
            </Title>
            <MarkdownField value={record?.content} />
        </Show>
    );
};
