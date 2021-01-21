import React from "react";
import styles from "./index.module.scss";
import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <h1>next-cli</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button>Docs</Button>
        </div>
    );
};
