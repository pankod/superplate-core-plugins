import { Box, TextField } from "@mui/material";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "../queries/categories";
<%_ } _%>

export default function CategoryEdit() {
    const {
        saveButtonProps,
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
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
        </Edit>
    );
};
