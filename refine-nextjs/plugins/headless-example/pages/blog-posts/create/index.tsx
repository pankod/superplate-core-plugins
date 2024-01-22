import {
    IResourceComponentsProps,
    useNavigation,
    useSelect,
} from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
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
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from "../../../src/queries/blog-posts";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_CREATE_MUTATION, CATEGORIES_SELECT_QUERY } from "../../../src/queries/blog-posts";
<%_ } _%>

export default function BlogPostCreate() {
    const { list } = useNavigation();

    const {
        refineCore: { onFinish },
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        refineCoreProps: {
            meta: {
              fields: BLOG_POSTS_QUERY,
            },
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        refineCoreProps: {
            meta: {
                gqlMutation: POST_CREATE_MUTATION,
            },
        },
<%_ } _%>
    });

    const { options: categoryOptions } = useSelect({
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
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Create</h1>
                <div>
                    <button
                        onClick={() => {
                            list("blog_posts");
                        }}
                    >
                        List
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFinish)}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <label>
                        <span style={{ marginRight: "8px" }}>title</span>
                        <input
                            type="text"
                            {...register("title", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.title?.message as string}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Content</span>
                        <textarea
                            rows={5}
                            cols={33}
                            style={{ verticalAlign: "top" }}
                            {...register("content", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.content?.message as string}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Category</span>
                        <select
                        {...register(<%- blogPostCategoryFormField %>, {
                            required: "This field is required",
                        })}
                        >
                            {categoryOptions?.map((option) => (
                                <option value={option.value} key={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <span style={{ color: "red" }}>
                            {(errors as any)?.category?.id?.message as string}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Status</span>
                        <select
                            defaultValue={<%- blogPostStatusDefaultValue %>}
                            {...register(<%- blogPostStatusDefaultValue %>, {
                                required: "This field is required",
                            })}
                        >
                            <option value='<%- blogPostStatusOptions[0].value%>'><%- blogPostStatusOptions[0].label%></option>
                            <option value='<%- blogPostStatusOptions[1].value%>'><%- blogPostStatusOptions[1].label%></option>
                            <option value='<%- blogPostStatusOptions[2].value%>'><%- blogPostStatusOptions[2].label%></option>
                        </select>
                        <span style={{ color: "red" }}>
                            {(errors as any)?.status?.message as string}
                        </span>
                    </label>
                    <div>
                        <input type="submit" value="save" />
                    </div>
                </div>
            </form>
        </div>
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