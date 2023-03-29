import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    <%- (_app.refineImports || []).join("\n,") _%>, 
} from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

<%_ if (answers["ui-framework"] === 'antd') { _%>
import { <%- (_app.refineAntdImports || []).join("\n,") _%> } from '@refinedev/antd';
import "@refinedev/antd/dist/reset.css";
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

<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>


function App() {
    <%- (_app.innerHooks || []).join("\n") %>

    <%- (_app.inner || []).join("\n") %>
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
            <%- top.join("\n") %>
            <Refine <%- (_app.refineProps || []).join("\n") %> 
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
                        },
                    ]}
                <%_ } _%>
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <%_ if (_app.hasRoutes === true && _app.isAuthRoutes) { _%>
                <Routes>
                    <Route
                        element={
                            <Authenticated
                                fallback={<CatchAllNavigate to="/login" />}
                            >
                                <%_ if (answers["ui-framework"] === 'no') { _%>
                                    <Outlet />
                                <%_ } else { _%>
                                    <ThemedLayout Header={Header}>
                                        <Outlet />
                                    </ThemedLayout>
                                <%_ } _%>
                            </Authenticated>
                        }
                    >
                        <Route index element={
                            <%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
                                <NavigateToResource resource="blog-posts" />
                            <%_ } else { _%>
                                <NavigateToResource resource="blog_posts" />
                            <%_ } _%>
                        } />
                        <Route path="/blog-posts">
                            <Route index element={<BlogPostList />} />
                            <Route path="create" element={<BlogPostCreate />} />
                            <Route path="edit/:id" element={<BlogPostEdit />} />
                            <Route path="show/:id" element={<BlogPostShow />} />
                        </Route>
                        <Route path="/categories">
                            <Route index element={<CategoryList />} />
                            <Route path="create" element={<CategoryCreate />} />
                            <Route path="edit/:id" element={<CategoryEdit />} />
                            <Route path="show/:id" element={<CategoryShow />} />
                        </Route>
                    </Route>
                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <NavigateToResource />
                            </Authenticated>
                        }
                    >
                        <%_ if (_app.isCustomLoginPage) { _%>
                            <Route path="/login" element={<Login />} <%- (_app.loginPageProps || []).join("\n") %> />
                        <%_ } else { _%>
                            <Route path="/login" element={<AuthPage type="login" <%- (_app.authPageProps || []).join("\n") %> />} />
                        <%_ } _%>
                    </Route>
                    <Route
                        element={
                            <Authenticated>
                                <%_ if (answers["ui-framework"] === 'no') { _%>
                                    <Outlet />
                                <%_ } else { _%>
                                    <ThemedLayout Header={Header}>
                                        <Outlet />
                                    </ThemedLayout>
                                <%_ } _%>
                            </Authenticated>
                        }
                    >
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <%_ } _%>

                <%_ if (_app.hasRoutes === true && _app.isNoAuthRoutes) { _%>
                <Routes>
                    <Route element={<ThemedLayout Header={Header}><Outlet /></ThemedLayout>}>
                        <Route index element={
                            <%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
                                <NavigateToResource resource="blog-posts" />
                            <%_ } else { _%>
                                <NavigateToResource resource="blog_posts" />
                            <%_ } _%>
                        } />
                        <Route path="/blog-posts">
                            <Route index element={<BlogPostList />} />
                            <Route path="create" element={<BlogPostCreate />} />
                            <Route path="edit/:id" element={<BlogPostEdit />} />
                            <Route path="show/:id" element={<BlogPostShow />} />
                        </Route>
                        <Route path="/categories">
                            <Route index element={<CategoryList />} />
                            <Route path="create" element={<CategoryCreate />} />
                            <Route path="edit/:id" element={<CategoryEdit />} />
                            <Route path="show/:id" element={<CategoryShow />} />
                        </Route>
                    </Route>
                    <Route element={<ThemedLayout Header={Header}><Outlet /></ThemedLayout>}>
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes> 
                <%_ } _%>

                <%_ if (_app.hasRoutes === false) { _%>
                    <Routes>
                        <Route index element={<WelcomePage />} />
                    </Routes>
                <%_ } _%>
                <RefineKbar />
                <UnsavedChangesNotifier />
            </Refine>
            <%- bottom.join("\n") %>
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
