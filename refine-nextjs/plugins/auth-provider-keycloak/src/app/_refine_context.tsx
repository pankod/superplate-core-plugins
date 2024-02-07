'use client'

import React from "react";
import { Refine, GitHubBanner, AuthBindings, <%- (_app.refineImports || []).join("\n,") _%> } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { SessionProvider, useSession, signOut, signIn } from "next-auth/react";
import { usePathname } from 'next/navigation'
<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { <%- (_app.refineAntdImports || []).join("\n,") _%> } from '@refinedev/antd';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { <%- (_app.refineMuiImports || []).join("\n,") _%> } from '@refinedev/mui';
<%_ } _%>

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
    <%_ if (answers["ui-framework"] !== 'no') { _%>
        defaultMode?: string;
    <%_ } _%>  
};

export const RefineContext = (props: React.PropsWithChildren<RefineContextProps>) => {
    return (
      <SessionProvider>
        <App {...props} />
      </SessionProvider>
    )
  }

type AppProps = {
    <%_ if (answers["ui-framework"] !== 'no') { _%>
        defaultMode?: string;
    <%_ } _%>  
};

const App = (props: React.PropsWithChildren<AppProps>) => {
    <%- (_app.innerHooks || []).join("\n") %>
    
    const { data, status } = useSession();
    const to = usePathname()

    <%- (_app.inner || []).join("\n") %>

    if (status === "loading") {
        return <span>loading...</span>;
    }

    const authProvider: AuthBindings = {
        login: async () => {
            signIn("keycloak", {
                    callbackUrl: to ? to.toString() : "/",
                    redirect: true,
                });

                return {
                    success: true,
                };
        },
        logout: async () => {
            signOut({
                redirect: true,
                callbackUrl: "/login",
            });

            return {
                success: true,
            };
        },
        onError: async (error) => {
            if (error.response?.status === 401) {
                return {
                    logout: true,
                };
            }
            
            return {
                error,
            };
        },
        check: async () => {
            if (status === "unauthenticated") {
                return {
                    authenticated: false,
                    redirectTo: "/login",
                };
            }

            return {
                authenticated: true,
            };
        },
        getPermissions: async () => {
            return null;
        },
        getIdentity: async () => {
            if (data?.user) {
                const { user } = data;
                return {
                    name: user.name,
                    avatar: user.image,
                };
            }

            return null;
        },
    };


    <%_ if (answers["ui-framework"] !== 'no') { _%>
         const defaultMode = props?.defaultMode
    <%_ } _%>  

    return (
        <>
        <GitHubBanner />
        <RefineKbarProvider>
            <%- top.join("\n") %>
            <Refine 
                routerProvider={routerProvider}
                <%- (_app.refineProps || []).join("\n") %>
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
                    <%_ } _%>
                ]}
                <%_ } _%>
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    <%_ if (typeof projectId !== 'undefined' && projectId !== '') { _%>
                        projectId: "<%= projectId %>",
                    <%_ } _%>
                }}
            >
                {props.children}
                <RefineKbar />
            </Refine>
            <%- bottom.join("\n") %>
        </RefineKbarProvider>
        </>
      );
};
