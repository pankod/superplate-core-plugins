import { 
    Refine, 
    <%_ if (answers["example-resource"] === "example-resource") { _%>
    Resource,
    <%_ } _%>
    <%_ if (answers["auth-provider"] === "auth0-auth-provider") { _%>
    AuthProvider,
    <%_ } _%>
} from '@pankod/refine';

<%- _app.import.join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>


function App() {
    <%- _app.innerHooks.join("\n") %>
    <%- _app.inner.join("\n") %>
    return (
        <%- top.join("\n") %>
        <Refine <%- _app.refineProps.join("\n") %>><%- (_app.children || []).join("\n") _%></Refine>
         <%- bottom.join("\n") %>
      );
};

export default App;
