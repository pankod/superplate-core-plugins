"use client"

import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
    NumberField,
    Show,
    TextFieldComponent as TextField,
} from "@refinedev/mui";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from  "@queries/categories";
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
    import { CATEGORY_SHOW_QUERY } from "@queries/categories";
<%_ } _%>

export default function CategoryShow() {
    const { queryResult } = useShow({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
            meta: {
                fields: CATEGORIES_QUERY,
            },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
            meta: {
                    gqlQuery: CATEGORY_SHOW_QUERY,
            },
<%_ } _%>
    });
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    {"ID"}
                </Typography>
                <TextField value={record?.id} />
                <Typography variant="body1" fontWeight="bold">
                    {"Title"}
                </Typography>
                <TextField value={record?.title} />
            </Stack>
        </Show>
    );
};
