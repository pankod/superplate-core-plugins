"use client";

import { CreateView } from "@/components/refine-ui/views/create-view";
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
import { CATEGORY_CREATE_MUTATION } from '@queries/categories'
<%_ } _%>

export default function CategoryCreate() {
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
                gqlMutation: CATEGORY_CREATE_MUTATION,
            },
            <%_ } _%>
        },
    })


    function onSubmit(values: Record<string, string>) {
        onFinish(values);
    }

    return (
        <CreateView>
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
                                ? "Creating..."
                                : "Create"}
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
        </CreateView>
    );
}
