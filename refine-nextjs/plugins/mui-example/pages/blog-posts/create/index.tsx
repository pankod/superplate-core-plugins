import { Autocomplete, Box, MenuItem, Select, TextField } from '@mui/material'
import { IResourceComponentsProps } from "@refinedev/core";
import { Create, useAutocomplete } from "@refinedev/mui";
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
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_CREATE_MUTATION, CATEGORIES_SELECT_QUERY } from  "../../../src/queries/blog-posts";
<%_ } _%>


export default function BlogPostCreate() {
    const {
        saveButtonProps,
        refineCore: {  formLoading, onFinish },
        handleSubmit,
        register,
        control,
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

    const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
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
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>         
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("title", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.title}
                    helperText={(errors as any)?.title?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={"Title"}
                    name="title"
                />
                <TextField
                    {...register("content", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.content}
                    helperText={(errors as any)?.content?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    multiline
                    label={"Content"}
                    name="content"
                />
             <Controller
                    control={control}
                    name={<%- blogPostCategoryFormField %>}
                    rules={{ required: "This field is required" }}
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <Autocomplete
                            {...categoryAutocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value.id)
                            }}
                            getOptionLabel={(item) => {
                                return (
                                  categoryAutocompleteProps?.options?.find((p) => {
                                    const itemId = typeof item === 'object' ? item?.id?.toString() : item?.toString()
                                    const pId = p?.id?.toString()
                                    return itemId === pId
                                  })?.title ?? ''
                                )
                              }}
                            isOptionEqualToValue={(option, value) => {
                                const optionId = option?.id?.toString()
                                const valueId = typeof value === 'object' ? value?.id?.toString() : value?.toString()
                                return value === undefined || optionId === valueId
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={"Category"}
                                    margin="normal"
                                    variant="outlined"
                                    error={!!(errors as any)?.category?.id}
                                    helperText={
                                        (errors as any)?.category?.id?.message
                                    }
                                    required
                                />
                            )}
                        />
                    )}
                />
                <Controller
                    name="status"
                    control={control}
                    render={({ field }) => {
                        return (
                         <Select {...field} value={field?.value || <%- blogPostStatusDefaultValue %>} label={'Status'}>
                            <MenuItem value='<%- blogPostStatusOptions[0].value%>'><%- blogPostStatusOptions[0].label%></MenuItem>
                            <MenuItem value='<%- blogPostStatusOptions[1].value%>'><%- blogPostStatusOptions[1].label%></MenuItem>
                            <MenuItem value='<%- blogPostStatusOptions[2].value%>'><%- blogPostStatusOptions[2].label%></MenuItem>
                        </Select>
                        );
                    }}
                />
            </Box>
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