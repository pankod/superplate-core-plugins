import { Refine, GitHubBanner, <%- (_app.refineImports || []).join("\n,") _%>
<%_ if (answers["ui-framework"] === 'no') { _%>
    WelcomePage
<%_ } _%> } from '@refinedev/core';
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
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <%_ if (_app.routes || [].lenght > 0) { _%>
                <Routes>
                    <%- (_app.routes || []).join("\n") %>
                </Routes>
                <%_ } _%>
                <%- (_app.refineComponents || []).join("\n") %>

                <%_ if (answers["ui-framework"] === 'no' && answers["inferencer-headless"] === "no") { _%>
                    <WelcomePage />
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
