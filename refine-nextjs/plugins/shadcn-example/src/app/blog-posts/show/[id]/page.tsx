'use client'

import { useOne, useShow } from "@refinedev/core";

import { ShowView } from "@/components/refine-ui/views/show-view";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
import { BLOG_POSTS_QUERY } from '@queries/blog-posts'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
import { POST_SHOW_QUERY } from '@queries/blog-posts'
<%_ } _%>


export default function BlogPostShow() {
    const { result: record, query } = useShow({
        <%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
        meta: {
            fields: BLOG_POSTS_QUERY,
        },
        <%_ } _%>
        <%_ if (answers["data-provider"] === "data-provider-strapi-v4") { _%>
        meta: {
            populate: ['category'],
        },
        <%_ } _%>
        <%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
        meta: {
            gqlQuery: POST_SHOW_QUERY,
        },
        <%_ } _%>
        <%_ if (answers["data-provider"] === "data-provider-supabase") { _%>
        meta: {
            select: '*, categories(id,title)',
        },
        <%_ } _%>
    });

    <%_ if (!isGraphQL && answers["data-provider"] !== "data-provider-appwrite") { _%>
    const { result: category, query: { isLoading: categoryIsLoading } } = useOne({
        resource: "categories",
        id: record?.<%- blogPostCategoryFieldName %>?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });
    <%_ } _%>
    const { isLoading } = query;


    return (
        <ShowView>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{record?.title}</CardTitle>
                        <CardDescription>
                            <div className="flex items-center gap-4">
                                <Badge variant={record?.status === "published" ? "default" : "secondary"}>
                                    {record?.status}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                    ID: {record?.id}
                                </span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">Category</h4>
                            <p className="text-sm text-muted-foreground">
                                <%_ if (isGraphQL || answers["data-provider"] === "data-provider-appwrite") { _%>
                                {record?.<%- blogPostCategoryFieldName %>?.title || "-"}
                                <%_ } else { _%>
                                {categoryIsLoading ? "Loading..." : category?.title || "-"}
                                <%_ } _%>
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="text-sm font-medium mb-2">Created At</h4>
                            <p className="text-sm text-muted-foreground">
                                {record?.<%_ if (answers["data-provider"] === "data-provider-appwrite") { _%>$createdAt<%_ } else if (answers["data-provider"] === "data-provider-hasura") { _%>created_at<%_ } else { _%>createdAt<%_ } _%>
                                    ? new Date(record.<%_ if (answers["data-provider"] === "data-provider-appwrite") { _%>$createdAt<%_ } else if (answers["data-provider"] === "data-provider-hasura") { _%>created_at<%_ } else { _%>createdAt<%_ } _%>).toLocaleDateString()
                                    : "-"
                                }
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="text-sm font-medium mb-4">Content</h4>
                            <div className="prose prose-sm max-w-none">
                                {record?.content ? (
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