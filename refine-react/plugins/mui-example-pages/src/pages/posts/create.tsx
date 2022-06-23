<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { useTranslate } from "@pankod/refine-core";
<%_ } _%>
import {
    Create,
    Box,
    TextField,
    Autocomplete,
    useAutocomplete,
} from "@pankod/refine-mui";
import { Controller, useForm } from "@pankod/refine-react-hook-form";

import { ICategory } from "interfaces";

export const PostCreate: React.FC = () => {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>
    
    const {
        saveButtonProps,
        register,
        control,
        formState: { errors },
    } = useForm();

    const { autocompleteProps } = useAutocomplete<ICategory>({
        resource: "categories",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("title", {
                        <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                            required: "This field is required",
                        <%_ } else { _%>
                            required: t(
                                "errors.required.field",
                                { field: "Title" },
                            ),
                        <%_ } _%>
                    })}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    margin="normal"
                    fullWidth
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                        label="Title"
                    <%_ } else { _%>
                        label={t("posts.fields.title")}
                    <%_ } _%>
                    name="title"
                    autoFocus
                />
                <Controller
                    control={control}
                    name="status"
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                        rules={{ required: "This field is required" }}
                    <%_ } else { _%>
                        rules={{
                            required: t(
                                "errors.required.field",
                                { field: "Status" },
                            ),
                        }}
                    <%_ } _%>
                    render={({ field }) => (
                        <Autocomplete
                            options={["published", "draft", "rejected"]}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                                        label="Status"
                                    <%_ } else { _%>
                                        label={t("posts.fields.status.title")}
                                    <%_ } _%>
                                    margin="normal"
                                    variant="outlined"
                                    error={!!errors.status}
                                    helperText={errors.status?.message}
                                    required
                                />
                            )}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="category"
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                        rules={{ required: "This field is required" }}
                    <%_ } else { _%>
                        rules={{
                            required: t(
                                "errors.required.field",
                                { field: "Category" },
                            ),
                        }}
                    <%_ } _%>
                    defaultValue=""
                    render={({ field }) => (
                        <Autocomplete
                            {...autocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            getOptionLabel={(item) => {
                                return (
                                    autocompleteProps?.options?.find(
                                        (p) =>
                                            p?.id?.toString() ===
                                            item?.id?.toString(),
                                    )?.title ?? ""
                                );
                            }}
                            isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                option.id.toString() === value.toString()
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                                        label="Category"
                                    <%_ } else { _%>
                                        label={t("posts.fields.category.title")}
                                    <%_ } _%>
                                    margin="normal"
                                    variant="outlined"
                                    error={!!errors.category}
                                    helperText={errors.category?.message}
                                    required
                                />
                            )}
                        />
                    )}
                />
                <TextField
                    {...register("content", {
                        <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                            required: "This field is required",
                        <%_ } else { _%>
                            required: t(
                                "errors.required.field",
                                { field: "Content" },
                            ),
                        <%_ } _%>
                    })}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                    margin="normal"
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                        label="Content"
                    <%_ } else { _%>
                        label={t("posts.fields.content")}
                    <%_ } _%>
                    multiline
                    rows={4}
                />
            </Box>
        </Create>
    );
};
