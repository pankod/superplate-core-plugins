'use client'

import { useOne, useShow } from "@refinedev/core";

import { ShowView } from "@/components/refine-ui/views/show-view";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function BlogPostShow() {
    const { result } = useShow({})

    const { data: category, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: result?.<%- blogPostCategoryFieldName %>?.id || "",
        queryOptions: {
            enabled: !!result?.category?.id,
        },
    });

    return (
        <ShowView>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{result?.title}</CardTitle>
                        <CardDescription>
                            <div className="flex items-center gap-4">
                                <Badge variant={result?.status === "published" ? "default" : "secondary"}>
                                    {result?.status}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                    ID: {result?.id}
                                </span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">Category</h4>
                            <p className="text-sm text-muted-foreground">
                                {categoryIsLoading ? "Loading..." : category?.title || "-"}
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="text-sm font-medium mb-2">Created At</h4>
                            <p className="text-sm text-muted-foreground">
                                {result?.<%_ if (answers["data-provider"] === "data-provider-appwrite") { _%>$createdAt<%_ } else if (answers["data-provider"] === "data-provider-hasura") { _%>created_at<%_ } else { _%>createdAt<%_ } _%>
                                    ? new Date(record.<%_ if (answers["data-provider"] === "data-provider-appwrite") { _%>$createdAt<%_ } else if (answers["data-provider"] === "data-provider-hasura") { _%>created_at<%_ } else { _%>createdAt<%_ } _%>).toLocaleDateString()
                                    : "-"
                                }
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="text-sm font-medium mb-4">Content</h4>
                            <div className="prose prose-sm max-w-none">
                                {result?.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: record.content }} />
                                ) : (
                                    <p className="text-muted-foreground">No content available</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ShowView>
    );
}