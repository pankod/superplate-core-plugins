import { IResourceComponentsProps, useNavigation } from "@refinedev/core";
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
import { Controller } from "react-hook-form";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from "../../../src/queries/blog-posts";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "../../../src/queries/categories";
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