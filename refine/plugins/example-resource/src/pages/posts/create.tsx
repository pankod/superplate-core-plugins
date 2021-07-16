import { useState } from "react";
import {
    Create,
    Form,
    Input,
    <%_ if (dataProvider === "nestjsx-crud-data-provider") { _%>
    Select,
    <%_ } _%>
    IResourceComponentsProps,
    useForm,
    <%_ if (i18n === "i18n") { _%>
    useTranslate,
    <%_ } _%>
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPost } from "interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<IPost>();

    <%_ if (i18n === "i18n") { _%>
    const t = useTranslate();
    <%_ } _%>

    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write",
    );
    
    <%_ if (i18n !== "i18n") { _%>
    const statusOptions = [
        {
            label: "Published",
            value: "published",
        },
        {
            label: "Draft",
            value: "draft",
        },
        {
            label: "Rejected",
            value: "rejected",
        },
    ];
    <%_ } else { _%>
    const statusOptions = [
        {
            label: t("posts.fields.status.published"),
            value: "published",
        },
        {
            label: t("posts.fields.status.draft"),
            value: "draft",
        },
        {
            label: t("posts.fields.status.rejected"),
            value: "rejected",
        },
    ];
    <%_ } _%>

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    wrapperCol={{ span: 14 }}
                    <%_ if (i18n !== "i18n") { _%>
                    label="Title"
                    <%_ } else { _%>
                    label={t("posts.fields.title")}
                    <%_ } _%>
                    name="title"    
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <%_ if (dataProvider === "nestjsx-crud-data-provider") { _%>
                <Form.Item
                    wrapperCol={{ span: 14 }}
                    <%_ if (i18n !== "i18n") { _%>
                    label="Status"
                    <%_ } else { _%>
                    label={t("posts.fields.status.title")}
                    <%_ } _%>
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select options={statusOptions} />
                </Form.Item>
                 <%_ } _%>
                <Form.Item
                    <%_ if (i18n !== "i18n") { _%>
                    label="Content"
                    <%_ } else { _%>
                    label={t("posts.fields.content")}
                    <%_ } _%>
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReactMde
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(
                                <ReactMarkdown>{markdown}</ReactMarkdown>,
                            )
                        }
                    />
                </Form.Item>
            </Form>
        </Create>
    );
};
