import React from "react";
import cx from "classnames";

import { Container, Button } from "@components";
import styles from "./index.module.scss";

export const Banner: React.FC = () => {
    return (
        <div className={cx(styles.banner)}>
            <Container className="text-center">
                <h1 className="display-2">next-cli</h1>
                <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
                <Button size="lg" className="mb-3">
                    Docs
                </Button>
                <div>
                    <small>Current Version: 0.0.1</small>
                </div>
            </Container>
        </div>
    );
};
