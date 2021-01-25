import React from "react";
import styles from "./index.module.css";
import { Button } from "@components/css";

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
