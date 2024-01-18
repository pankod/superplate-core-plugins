import { Stack, Typography } from "@mui/material";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import {
    NumberField,
    Show,
    TextFieldComponent as TextField,
} from "@refinedev/mui";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
    import { CATEGORIES_QUERY } from "../queries/categories";
<%_ } _%>

export default function CategoryShow() {
    const { queryResult } = useShow({
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
            meta: {
                fields: CATEGORIES_QUERY,
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
                <NumberField value={record?.id ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    {"Title"}
                </Typography>
                <TextField value={record?.title} />
            </Stack>
        </Show>
    );
};
