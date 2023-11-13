import React from "react";
import { AppProps } from "next/app";
import type { NextPage } from "next";
import { Refine, GitHubBanner, AuthBindings, <%- (_app.refineImports || []).join("\n,") _%> } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { SessionProvider, useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/router";
<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { <%- (_app.refineAntdImports || []).join("\n,") _%> } from '@refinedev/antd';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { <%- (_app.refineMuiImports || []).join("\n,") _%> } from '@refinedev/mui';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { <%- (_app.refineMantineImports || []).join("\n,") _%> } from '@refinedev/mantine';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import { <%- (_app.refineChakraImports || []).join("\n,") _%> } from '@refinedev/chakra-ui';
<%_ } _%>
import routerProvider, { UnsavedChangesNotifier } from "@refinedev/nextjs-router";

<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
     noLayout?: boolean;
 };

 type AppPropsWithLayout = AppProps & {
     Component: NextPageWithLayout;
 };

 const App = (props: React.PropsWithChildren) => {
    <%- (_app.innerHooks || []).join("\n") %>
    
    const { data, status } = useSession();
    const router = useRouter();
    const { to } = router.query;

    <%- (_app.inner || []).join("\n") %>

    if (status === "loading") {
        return <span>loading...</span>;
    }

    const authProvider: AuthBindings = {
        login: async () => {
            signIn("auth0", {
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
            console.error(error);
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

    return (
        <>
        <GitHubBanner />
        <RefineKbarProvider>
            <%- top.join("\n") %>
            <Refine 
                routerProvider={routerProvider}
                <%- (_app.refineProps || []).join("\n") %>
                <%_ if (answers["inferencer"] === 'inferencer' || answers["inferencer-headless"] === 'inferencer-headless') { _%>
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
                <UnsavedChangesNotifier />
            </Refine>
            <%- bottom.join("\n") %>
        </RefineKbarProvider>
        </>
      );
};


function MyApp({ Component, pageProps: { session, ...pageProps }, }: AppPropsWithLayout): JSX.Element {
    const renderComponent = () => {
        if (Component.noLayout) {
            return <Component {...pageProps} />;
        }

        <%_ if (answers["ui-framework"] === "no") { _%>
            return (
                <Component {...pageProps} />
            );
        <%_ } else {_%>
            return (
                <ThemedLayoutV2
                    Header={() => <Header sticky />}
                    <%_ if (answers["ui-framework"] === 'antd') { _%>
                    Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                    <%_ } _%>
                    <%_ if (selectedSvg || selectedTitle) { _%>
                    Title={({ collapsed }) => (
                        <ThemedTitleV2
                            collapsed={collapsed}
                        <%_ if (selectedTitle) { _%>
                            text="<%= selectedTitle %>"
                        <%_ } _%>
                        <%_ if (selectedSvg) { _%>
                            icon={<AppIcon />}
                        <%_ } _%>
                        />
                    )}
                    <%_ } _%>
                >
                    <Component {...pageProps} />
                </ThemedLayoutV2>
            );
        <%_ } _%>
    };

    return (
        <SessionProvider session={session}>
            <App>{renderComponent()}</App>
        </SessionProvider>
    );
};


<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
export default appWithTranslation(MyApp);
<%_ } else {_%>
export default MyApp;
<%_ } _%>
