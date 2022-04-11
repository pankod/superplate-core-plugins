import { Refine, <%- (_app.refineImports || []).join("\n,") _%> } from '@pankod/refine-core';
<%_ if (answers.uiFramework === 'antd') { _%>
import { <%- (_app.refineAntdImports || []).join("\n,") _%> } from '@pankod/refine-antd';
<%_ } _%>
<%- (_app.import || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>


function App() {
    <%- (_app.innerHooks || []).join("\n") %>
    <%- (_app.inner || []).join("\n") %>
    return (
        <%- top.join("\n") %>
        <%_ if (answers["dataProvider"] === "nhost-data-provider") { _%>
            <NhostAuthProvider  nhost={nhost}>
            <%_ } _%>
            <Refine <%- (_app.refineProps || []).join("\n") %> />
            <%_ if (answers["dataProvider"] === "nhost-data-provider") { _%>
            </NhostAuthProvider>
            <%_ } _%>
        <%- bottom.join("\n") %>
      );
};

export default App;
