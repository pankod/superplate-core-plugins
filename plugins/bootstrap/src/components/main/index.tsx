import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div
            className="text-center py-4"
            style={{ backgroundColor: "#282c34" }}
        >
            <Container>
                <h1 data-test="main-heading" className="display-2 text-white">
                    electio
                </h1>
                <p className="lead text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
                <Button type="primary" size="lg">
                    <a
                        data-test="docs-btn-anchor"
                        href="https://pankod.github.io/electio/"
                        target="_blank"
                    >
                        Docs
                    </a>
                </Button>
            </Container>
        </div>
    );
};
