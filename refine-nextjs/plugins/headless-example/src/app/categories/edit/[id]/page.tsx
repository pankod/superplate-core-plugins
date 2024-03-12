"use client"

import { useNavigation } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import React from "react";
import { Controller } from "react-hook-form";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "@queries/categories";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { CATEGORY_EDIT_MUTATION } from "@queries/categories";
<%_ } _%>


export default function CategoryEdit() {
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
                fields: CATEGORIES_QUERY,
            },
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        refineCoreProps: {
            meta: {
                gqlMutation: CATEGORY_EDIT_MUTATION,
            },
        },
<%_ } _%>
    });

    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Edit</h1>
                <div>
                    <button
                        onClick={() => {
                            list("categories");
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
                        <span style={{ marginRight: "8px" }}>Title</span>
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
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
};
