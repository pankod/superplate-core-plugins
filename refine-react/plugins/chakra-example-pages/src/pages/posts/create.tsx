import {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    useTranslate,
    <%_ } _%>
    useSelect,
} from "@pankod/refine-core";
import {
    Create,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
} from "@pankod/refine-chakra-ui";
import { useForm } from "@pankod/refine-react-hook-form";

import { IPost } from "interfaces";

export const PostCreate: React.FC = () => {
    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        const t = useTranslate();
    <%_ } _%>
    
    const {
        refineCore: { formLoading },
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm<IPost>();

    const { options } = useSelect({
        resource: "categories",
    });

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <FormControl mb="3" isInvalid={!!errors?.title}>
                <FormLabel>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    Title
                    <%_ } else { _%>
                    {t("posts.fields.title")}
                    <%_ } _%>
                </FormLabel>
                <Input
                    id="title"
                    type="text"
                    {...register("title", { required: "Title is required" })}
                />
                <FormErrorMessage>
                    {`${errors.title?.message}`}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb="3" isInvalid={!!errors?.status}>
                <FormLabel>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    Status
                    <%_ } else { _%>
                    {t("posts.fields.status.title")}
                    <%_ } _%>
                </FormLabel>
                <Select
                    id="status"
                    {...register("status", {
                        required: "Status is required",
                    })}
                >
                    <option>published</option>
                    <option>draft</option>
                    <option>rejected</option>
                </Select>
                <FormErrorMessage>
                    {`${errors.status?.message}`}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb="3" isInvalid={!!errors?.categoryId}>
                <FormLabel>
                    <%_ if (answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
                    Category
                    <%_ } else { _%>
                    {t("posts.fields.category.title")}
                    <%_ } _%>
                </FormLabel>
                <Select
                    id="categoryId"
                    placeholder="Select Category"
                    {...register("categoryId", {
                        required: "Category is required",
                    })}
                >
                    {options?.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
                <FormErrorMessage>
                    {`${errors.categoryId?.message}`}
                </FormErrorMessage>
            </FormControl>
        </Create>
    );
};
