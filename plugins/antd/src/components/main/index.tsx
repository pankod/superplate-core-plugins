import React, { CSSProperties } from "react";

import { Button } from "@components";
<%_ if (css_features === "styled-components") { _%>
// TODO: import styled file
<%_ } else { _%>
import styles from "./index.module.<%= css_features %>";
<%_ } _%>

export const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.main__title}>next-cli</h1>
            <p className={styles.main__description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button type="primary" size="large">
                Docs
            </Button>
        </div>
    );
};
