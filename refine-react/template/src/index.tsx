import React from "react";
import ReactDOM from "react-dom";
<%_ if (answers["auth-provider"] === "auth0-auth-provider") { _%>
import { Auth0Provider } from "@auth0/auth0-react";
<%_ } _%>


import reportWebVitals from "./reportWebVitals";
import App from "./App";
<%_ if (i18n !== "no") { _%>
import "./i18n";
<%_ } _%>


ReactDOM.render(
    <React.StrictMode>
        <%_ if (i18n !== "no") { _%>
        <React.Suspense fallback="loading">
        <%_ } _%>
            <%_ if (answers["auth-provider"] === "auth0-auth-provider") { _%>
            <Auth0Provider
                domain="your-auth0-domain-address"
                clientId="your-auth0-clientId"
                redirectUri={window.location.origin}
            >
            <%_ } _%>
                <App />
            <%_ if (answers["auth-provider"] === "auth0-auth-provider") { _%>
            </Auth0Provider>
            <%_ } _%>
        <%_ if (i18n !== "no") { _%>
        </React.Suspense>
        <%_ } _%>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
