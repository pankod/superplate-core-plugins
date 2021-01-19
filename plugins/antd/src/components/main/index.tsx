import React, { CSSProperties } from "react";
import { Layout } from "antd";

import { Button } from "@components";
import styles from "./index.module.css";

export const Main: React.FC = () => {
    return (
        <Layout.Content className={styles.main}>
            <h1 className={styles.main__title}>next-cli</h1>
            <p className={styles.main__description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button type="primary" size="large">
                Docs
            </Button>
        </Layout.Content>
    );
};
