import {
    IResourceComponentsProps,
    useNavigation,
    useSelect,
} from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from "../queries/blog-posts";
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
    });

    const { options: categoryOptions } = useSelect({
        resource: "categories",
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
            meta: {
                fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
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
<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
                            {...register("category_id", {
                                required: "This field is required",
                            })}
<%_ } else { _%>
                            {...register("category.id", {
                                required: "This field is required",
                            })}
<%_ } _%>
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
                            defaultValue="draft"
                            {...register("status", {
                                required: "This field is required",
                            })}
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                            <option value="rejected">Rejected</option>
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
