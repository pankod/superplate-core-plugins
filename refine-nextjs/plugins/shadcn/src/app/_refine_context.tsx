'use client'

import React from "react";
import { Refine, GitHubBanner, <%- (_app.refineImports || []).join("\n,") _%> } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider from "@refinedev/nextjs-router";

<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>

type RefineContextProps = {
    children: React.ReactNode;
};

export const RefineContext = ({ children }: RefineContextProps) => {
    <%- (_app.innerHooks || []).join("\n") %>

    <%- (_app.inner || []).join("\n") %>

    return (
        <RefineKbarProvider>
            <%- top.join("\n") %>
                <Refine <%- (_app.refineProps || []).join("\n") %>
                    routerProvider={routerProvider}
                    <%_ if (_app.hasRoutes === true) { _%>
                        resources={[
                            <%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
                            {
                                name: "blog-posts",
                                list: "/blog-posts",
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                                show: "/blog-posts/show/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                            <%_ } else { _%>
                            {
                                name: "blog_posts",
                                list: "/blog-posts",
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                                show: "/blog-posts/show/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                            <%_ } _%>
                            {
                                name: "categories",
                                list: "/categories",
                                create: "/categories/create",
                                edit: "/categories/edit/:id",
                                show: "/categories/show/:id",
                                meta: {
                                    canDelete: true,
                                },
                            }
                        ]}
                        <%_ } _%>
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        <%_ if (typeof projectId !== 'undefined' && projectId !== '') { _%>
                            projectId: "<%= projectId %>",
                        <%_ } _%>
                        <%- (_app.refineOptions || []).join("\n") %>
                    }}
                >
                    {children}
                    <Toaster />
                    <RefineKbar />
                </Refine>
            <%- bottom.join("\n") %>
        </RefineKbarProvider>
    );
};