"use client";

import { Box, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "@queries/categories";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { CATEGORY_CREATE_MUTATION } from "@queries/categories";
<%_ } _%>

export default function CategoryCreate() {
    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
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
                gqlMutation: CATEGORY_CREATE_MUTATION,
            },
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
            </Box>
        </Create>
    );
};
