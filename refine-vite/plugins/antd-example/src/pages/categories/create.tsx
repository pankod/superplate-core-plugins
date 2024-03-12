import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { CATEGORY_CREATE_MUTATION } from './queries'
<%_ } _%>

export const CategoryCreate = () => {
    const { formProps, saveButtonProps } = useForm({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: CATEGORIES_QUERY,
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        meta: {
            gqlMutation: CATEGORY_CREATE_MUTATION,
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
            </Form>
        </Create>
    );
};
