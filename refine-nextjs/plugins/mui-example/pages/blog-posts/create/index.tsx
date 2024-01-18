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
    });

    const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
        resource: "categories",
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
            meta: {
                    fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
            },
<%_ } _%>
    });

<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        // hasura expects category_id instead of category
        // so we need to remove category from the data and add category_id
        const onSubmitHandler = () => {
            handleSubmit((data) =>
            onFinish({
                ...data,
                category: undefined,
                category_id: data?.category?.id,
            })
            )()
        }
<%_ } _%>

    return (
        <Create isLoading={formLoading}
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>  
            saveButtonProps={{ ...saveButtonProps, onClick: onSubmitHandler }}       
<%_ } else { _%>
            saveButtonProps={saveButtonProps}
<%_ } _%>                
        >
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
                    name="category"
                    rules={{ required: "This field is required" }}
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <Autocomplete
                            {...categoryAutocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            getOptionLabel={(item) => {
                                return (
                                    categoryAutocompleteProps?.options?.find(
                                        (p) =>
                                            p?.id?.toString() ===
                                            item?.id?.toString(),
                                    )?.title ?? ""
                                );
                            }}
                            isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                option?.id?.toString() === value?.id?.toString()
                            }
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
                name='status'
                control={control}
                render={({ field }) => (
                    <Select {...field} value={field?.value || 'draft'} label={'Status'}>
                        <MenuItem value={'draft'}>Draft</MenuItem>
                        <MenuItem value={'published'}>Published</MenuItem>
                        <MenuItem value={'rejected'}>Rejected</MenuItem>
                    </Select>
                )}
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