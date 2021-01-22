import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "#282c34",
                color: "#fff",
                textAlign: "center",
                paddingTop: 32,
                paddingBottom: 32,
            }}
        >
            <h1
                <% if(!(e2etest === "none")) { %>  data-test="main-heading" <% } %>
                style={{ color: "#fff", fontSize: 46 }}
            >
                electio
            </h1>
            <p style={{ fontSize: 18 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button type="primary" size="large">
                <a
                    <% if(!(e2etest === "none")) { %>  data-test="docs-btn-anchor" <% } %>
                    href="https://pankod.github.io/electio/"
                    target="_blank"
                >
                    Docs
                </a>
            </Button>
        </div>
    );
};
