import React from "react";
import { createRoot } from "react-dom/client";
<%_ if (answers["auth-provider"] === "auth-provider-auth0") { _%>
import { Auth0Provider } from "@auth0/auth0-react";
<%_ } _%>

<%_ if (answers["auth-provider"] === "auth-provider-keycloak") { _%>
import Keycloak from "keycloak-js";
import { ReactKeycloakProvider } from "@react-keycloak/web";
<%_ } _%>


import App from "./App";
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import "./i18n";
<%_ } _%>

<%_ if (answers["auth-provider"] === "auth-provider-keycloak") { _%>
const keycloak = new Keycloak({
    clientId: "refine-demo",
    url: "https://lemur-0.cloud-iam.com/auth",
    realm: "refine",
});
<%_ } _%>

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

<%
    var mainWrapper = _app.mainWrapper || [];
    var top = mainWrapper.map(wrapper => wrapper[0] || "");
    var bottom = mainWrapper.map(wrapper => wrapper[1] || "").reverse();
%>


root.render(
    <%_ if (_app.hasStrictMode === true) { _%>
        <React.StrictMode>
    <%_ } _%>
        <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        <React.Suspense fallback="loading">
        <%_ } _%>
            <%- top.join("\n") %>
                <App />
            <%- bottom.join("\n") %>
        <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        </React.Suspense>
        <%_ } _%>
    <%_ if (_app.hasStrictMode === true) { _%>
    </React.StrictMode>
    <%_ } _%>
);
