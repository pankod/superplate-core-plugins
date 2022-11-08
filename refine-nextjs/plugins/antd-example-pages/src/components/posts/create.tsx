import {
    IResourceComponentsProps,
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        useTranslate,
    <%_ } _%>
} from "@pankod/refine-core";
import {
    Create,
    Form,
    Input,
    Select,
    useSelect,
    useForm,
} from "@pankod/refine-antd";

import { IPost, ICategory } from "src/interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
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
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
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
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
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
                     <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
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
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    label="Category"
                <%_ } else { _%>
                    label={t("posts.fields.category")}
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
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
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
                    <Input.TextArea rows={4}  />    
                </Form.Item>
            </Form>
        </Create>
    );
};
