import { Edit, useForm, useSelect } from "@refinedev/antd";
import { IResourceComponentsProps } from "@refinedev/core";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_EDIT_MUTATION, CATEGORIES_SELECT_QUERY } from './queries'
<%_ } _%>

export const BlogPostEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult, formLoading } = useForm({
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
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    meta: {
        gqlMutation: POST_EDIT_MUTATION,
    },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-supabase") { _%>
    meta: {
        select: '*, categories(id,title)',
    },
<%_ } _%>
    });

    const blogPostsData = queryResult?.data?.data;

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
        defaultValue: blogPostsData?.<%- blogPostCategoryFieldName %>?.id,
        queryOptions: {
            enabled: !!blogPostsData?.<%- blogPostCategoryFieldName %>?.id,
        },
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
        <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
            <Form {...formProps} 
            layout="vertical">
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
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label={"Category"}
                    name={<%- blogPostCategoryIdFormField %>}
                    initialValue={formProps?.initialValues?.<%- blogPostCategoryFieldName %>?.id}
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
        </Edit>
    );
};
