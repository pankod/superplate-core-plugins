import React from "react";
import { createRoot } from "react-dom/client";
<%_ if (answers["auth-provider"] === "auth-provider-auth0") { _%>
import { Auth0Provider } from "@auth0/auth0-react";
<%_ } _%>


import reportWebVitals from "./reportWebVitals";
import App from "./App";
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import "./i18n";
<%_ } _%>

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        <React.Suspense fallback="loading">
        <%_ } _%>
            <%_ if (answers["auth-provider"] === "auth-provider-auth0") { _%>
            <Auth0Provider
                domain="your-auth0-domain-address"
                clientId="your-auth0-clientId"
                redirectUri={window.location.origin}
            >
            <%_ } _%>
                <App />
            <%_ if (answers["auth-provider"] === "auth-provider-auth0") { _%>
            </Auth0Provider>
            <%_ } _%>
        <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
        </React.Suspense>
        <%_ } _%>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
