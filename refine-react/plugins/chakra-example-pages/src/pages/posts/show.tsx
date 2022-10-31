import { 
    useShow,
    useOne,
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        useTranslate,
    <%_ } _%>
} from "@pankod/refine-core";
import {
    Show,
    Heading,
    Text,
    MarkdownField,
    Spacer,
} from "@pankod/refine-chakra-ui";

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
            <Heading as="h5" size="sm">
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    ID
                <%_ } else { _%>
                    {t("posts.fields.id")}
                <%_ } _%>
            </Heading>
            <Text mt={2}>{record?.id}</Text>

            <Heading as="h5" size="sm" mt={4}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    Title
                <%_ } else { _%>
                    {t("posts.fields.title")}
                <%_ } _%>
            </Heading>
            <Text mt={2}>{record?.title}</Text>

            <Heading as="h5" size="sm" mt={4}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    Status
                <%_ } else { _%>
                    {t("posts.fields.status.title")}
                <%_ } _%>
            </Heading>
            <Text mt={2}>{record?.status}</Text>

            <Heading as="h5" size="sm" mt={4}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    Category
                <%_ } else { _%>
                    {t("posts.fields.category.title")}
                <%_ } _%>
            </Heading>
            <Text mt={2}>{categoryData?.data?.title}</Text>

            <Heading as="h5" size="sm" mt={4}>
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    Content
                <%_ } else { _%>
                    {t("posts.fields.content")}
                <%_ } _%>
            </Heading>
            <Spacer mt={2} />
            <MarkdownField value={record?.content} />
        </Show>
    );
};
