import { useShow } from "@refinedev/core";
import React from "react";

import { ShowView } from "@/components/refine-ui/views/show-view";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
import { CATEGORIES_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
import { CATEGORY_SHOW_QUERY } from './queries'
<%_ } _%>

export const CategoryShow = () => {
    const { result: record, query } = useShow({
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
    const { isLoading } = query;

    return (
        <ShowView>
            <Card>
                <CardHeader>
                    <CardTitle>{record?.title}</CardTitle>
                    <CardDescription>
                        Category ID: {record?.id}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">Title</h4>
                            <p className="text-sm text-muted-foreground">
                                {record?.title || "-"}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </ShowView>
    );
};