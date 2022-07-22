import { Refine, <%- (_app.refineImports || []).join("\n,") _%> } from '@pankod/refine-core';
<%_ if (answers["ui-framework"] === 'antd') { _%>
import { <%- (_app.refineAntdImports || []).join("\n,") _%> } from '@pankod/refine-antd';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { <%- (_app.refineMuiImports || []).join("\n,") _%> } from '@pankod/refine-mui';
<%_ } _%>
<%_ if (answers["command-palette"] === 'kbar') { _%>
    import { <%- (_app.refineMuiImports || []).join("\n,") _%> } from '@pankod/refine-kbar';
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
        <%- top.join("\n") %>
        <Refine <%- (_app.refineProps || []).join("\n") %> />
        <%- bottom.join("\n") %>
      );
};

export default App;
