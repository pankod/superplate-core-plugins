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
            <h1 style={{ color: "#fff", fontSize: 46 }}>next-cli</h1>
            <p style={{ fontSize: 18 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button type="primary" size="large">
                Docs
            </Button>
        </div>
    );
};
