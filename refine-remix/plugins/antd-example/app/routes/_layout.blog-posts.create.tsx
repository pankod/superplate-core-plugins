import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from  "../queries/blog-posts";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_CREATE_MUTATION, CATEGORIES_SELECT_QUERY } from  "../queries/blog-posts";
<%_ } _%>

export default function BlogPostCreate() {
    const { formProps, saveButtonProps } = useForm({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: BLOG_POSTS_QUERY,
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        meta: {
            gqlMutation: POST_CREATE_MUTATION,
        },
<%_ } _%>
    });

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        meta: {
            gqlQuery: CATEGORIES_SELECT_QUERY,
        },
<%_ } _%>
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Title"}
                    name={["title"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Content"}
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea rows={5} />
                </Form.Item>
                <Form.Item
                    label={"Category"}
                    name={<%- blogPostCategoryIdFormField %>}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>
                <Form.Item
                    label={"Status"}
                    name={["status"]}
                    initialValue={<%- blogPostStatusDefaultValue %>}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                <Select
                    defaultValue={<%- blogPostStatusDefaultValue %>}
                    options={<%- blogPostStatusOptions %>}
                    style={{ width: 120 }}
                />
                </Form.Item>
            </Form>
        </Create>
    );
};
