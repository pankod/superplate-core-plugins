"use client";

import { EditView } from "@/components/refine-ui/views/edit-view";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "@refinedev/react-hook-form";
import { useRouter } from "next/navigation";

<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
import { CATEGORIES_QUERY } from '@queries/categories'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
import { CATEGORY_EDIT_MUTATION } from '@queries/categories'
<%_ } _%>

export default function CategoryEdit() {
    const router = useRouter();

    const {
        refineCore: { onFinish },
        ...form
    } = useForm({
        refineCoreProps: {
        <%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: CATEGORIES_QUERY,
        },
        <%_ } _%>
        <%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        meta: {
            gqlMutation: CATEGORY_EDIT_MUTATION,
        },
        <%_ } _%>
        },
    })

    function onSubmit(values: Record<string, string>) {
        onFinish(values);
    }

    return (
        <EditView>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        rules={{ required: "Title is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ""}
                                        placeholder="Enter category title"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex gap-2">
                        <Button
                            type="submit"
                            {...form.saveButtonProps}
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting
                                ? "Updating..."
                                : "Update"}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.back()}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Form>
        </EditView>
    );
}
