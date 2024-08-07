"use client"

import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import React from "react";
import { Controller } from "react-hook-form";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from  "@queries/blog-posts";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { POST_EDIT_MUTATION, CATEGORIES_SELECT_QUERY } from  "@queries/blog-posts";
<%_ } _%>

export default function BlogPostEdit() {
    const {
        saveButtonProps,
        refineCore: { queryResult, formLoading, onFinish },
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
<%_ if (answers["data-provider"] === "data-provider-strapi-v4") { _%>
        refineCoreProps: {
            meta: {
                populate: ['category'],
            },
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        refineCoreProps: {
            meta: {
                gqlMutation: POST_EDIT_MUTATION,
            },
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-supabase") { _%>
        refineCoreProps: {
            meta: {
                select: '*, categories(id,title)',
            },
        },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-appwrite") { _%>
    refineCoreProps: {
        queryOptions: {
            select: ({ data }) => {
            return {
                data: {
                ...data,
                category: data.category.$id,
                },
            };
            },
        },
    },
<%_ } _%>
    });

    const blogPostsData = queryResult?.data?.data;

    const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
        resource: "categories",
<%_ if (answers["data-provider"] === "data-provider-appwrite") { _%>
        defaultValue: blogPostsData?.<%- blogPostCategoryFieldName %>,
<%_ } else { _%>
        defaultValue: blogPostsData?.<%- blogPostCategoryFieldName %>?.id,
<%_ } _%>
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
        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
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
                <Controller
                    control={control}
                    name={<%- blogPostCategoryIdFormField %>}
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
<%_ if (answers["data-provider"] === "data-provider-appwrite") { _%>
                                    error={!!(errors as any)?.<%- blogPostCategoryFieldName %>}
                                    helperText={
                                        (errors as any)?.<%- blogPostCategoryFieldName %>?.message
                                    }
<%_ } else { _%>
                                    error={!!(errors as any)?.<%- blogPostCategoryFieldName %>?.id}
                                    helperText={
                                        (errors as any)?.<%- blogPostCategoryFieldName %>?.id?.message
                                    }
<%_ } _%>
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
                    rows={4}
                />
            </Box>
        </Edit>
    );
};
