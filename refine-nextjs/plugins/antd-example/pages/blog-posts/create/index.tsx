import { Create, useForm, useSelect } from "@refinedev/antd";
import { IResourceComponentsProps } from "@refinedev/core";
import { Form, Input, Select } from "antd";
import React from "react";
import { GetServerSideProps } from "next";
<%_ if (_app.isAuthProviderCheck) { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (_app.isNextAuthCheck) { _%>
    import { getServerSession } from "next-auth";
    import { authOptions } from "pages/api/auth/[...nextauth]";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from  "../../../src/queries/blog-posts";
<%_ } _%>

export default function BlogPostCreate() {
    const { formProps, saveButtonProps } = useForm({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: BLOG_POSTS_QUERY,
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
        </Create>
    );
};


export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    <%_ if (_app.isNextAuthCheck) { _%>
      const session = await getServerSession(
        context.req,
        context.res,
        authOptions,
    );
    <%_ } _%>

    <%_ if (_app.isAuthProviderCheck) { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (_app.isNextAuthCheck) { _%>
    if (!session) {
        return {
            props: {
            },
            redirect: {
                destination: `/login?to=${encodeURIComponent("/blog-posts")}`,
                permanent: false,
            },
        };
    }
    <%_ } _%>

    <%_ if (_app.isAuthProviderCheck) { _%>
    if (!authenticated) {
        return {
            props: {
         
            },
            redirect: {
                destination: `${redirectTo}?to=${encodeURIComponent("/blog-posts")}`,
                permanent: false,
            },
        };
    }
    <%_ } _%>

    return {
        props: {
         
        },
    };
};