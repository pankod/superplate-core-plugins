import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

import { Button } from "@components";
import styles from "./index.module.css";

export const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <Container>
                <h1 className={styles.main__title}>next-cli</h1>
                <p className={styles.main__description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
                <Button type="primary" size="lg">
                    Docs
                </Button>
            </Container>
        </div>
    );
};
