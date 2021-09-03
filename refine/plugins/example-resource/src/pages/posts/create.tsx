import { useState } from "react";
import {
    Create,
    Form,
    Input,
    Select,
    useSelect,
    IResourceComponentsProps,
    useForm,
    <%_ if (i18n === "i18n") { _%>
    useTranslate,
    <%_ } _%>
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPost, ICategory } from "interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write",
    );

    <%_ if (i18n === "i18n") { _%>
    const t = useTranslate();
    <%_ } _%>

    const { formProps, saveButtonProps } = useForm<IPost>();

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
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
                <Form.Item
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
                    <Select 
                     <%_ if (i18n !== "i18n") { _%>
                     options={[
                        {
                          label: "published",
                          value: "published",
                        },
                        {
                          label:  "draft",
                          value: "draft",
                        },
                        {
                          label: "rejected",
                          value: "rejected",
                        },
                      ]}
                      <%_ } else { _%>
                        options={[
                            {
                              label: t("posts.fields.status.published"),
                              value: "published",
                            },
                            {
                              label:  t("posts.fields.status.draft"),
                              value: "draft",
                            },
                            {
                              label: t("posts.fields.status.rejected"),
                              value: "rejected",
                            },
                          ]}
                    <%_ } _%>
                    />
                </Form.Item>


                <Form.Item
                <%_ if (i18n !== "i18n") { _%>
                    label="Category"
                <%_ } else { _%>
                    label={t("posts.fields.category.title")}
                <%_ } _%>
                name={["category", "id"]}
                rules={[
                    {
                    required: true,
                    },
                ]}>
                <Select {...categorySelectProps} />
                </Form.Item>
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
