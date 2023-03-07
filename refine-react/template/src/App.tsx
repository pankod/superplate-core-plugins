import { Refine, <%- (_app.refineImports || []).join("\n,") _%> } from '@refinedev/core';
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

<%_ if (_app.hasLayout || false) { _%>
import { Header } from "./components";
<%_ } _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>
<%
    var layoutWrapperTop = _app.layoutWrapper.map(layoutWrapper => layoutWrapper[0] || "");
    var layoutWrapperBottom = _app.layoutWrapper.map(layoutWrapper => layoutWrapper[1] || "").reverse();
%>


function App() {
    <%- (_app.innerHooks || []).join("\n") %>

    <%- (_app.inner || []).join("\n") %>
    
    return (
        <%- top.join("\n") %>
        <Refine <%- (_app.refineProps || []).join("\n") %>>
            <%_ if (_app.hasLayout || false) { _%>
                <%- layoutWrapperTop.join("\n") %>
                    <Layout Header={Header}>
                        <%- (_app.routes || []).join("\n") %>    
                    </Layout>
                <%- layoutWrapperBottom.join("\n") %>
            <%_ } else { _%>
                <%- (_app.routes || []).join("\n") %>    
            <%_ } _%>
            <%- (_app.refineComponents || []).join("\n") %>
        </Refine>
        <%- bottom.join("\n") %>
      );
};

export default App;
