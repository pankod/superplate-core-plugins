import { Edit, useForm, useSelect } from "@refinedev/antd";
import { IResourceComponentsProps } from "@refinedev/core";
import { Form, Input, Select } from "antd";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from "../../../src/queries/blog-posts";
<%_ } _%>

export default function BlogPostEdit() {
    const { formProps, saveButtonProps, queryResult } = useForm({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: BLOG_POSTS_QUERY,
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-strapi-v4") { _%>
        meta: {
            populate: ['category'],
        },
<%_ } _%>
    });

    const blogPostsData = queryResult?.data?.data;

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
        defaultValue: blogPostsData?.category?.id,
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
        },
<%_ } _%>
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
                    name="category_id"
<%_ } else { _%>
                    name={["category", "id"]}
<%_ } _%>
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
                    initialValue={'draft'}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        defaultValue='draft'
                        style={{ width: 120 }}
                        options={[
                        { value: 'draft', label: 'Draft' },
                        { value: 'published', label: 'Published' },
                        { value: 'rejected', label: 'Rejected' },
                        ]}
                    />
                </Form.Item>
            </Form>
        </Edit>
    );
};
