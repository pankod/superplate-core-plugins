import React from "react";

import styles from "./index.module.scss";
import data from "@public/meta.json";
import { Card } from "@components/scss";

export const Cards: React.FC = () => {
    return (
        <div className={styles.cards}>
            {data.map((item) => (
                <div className={styles.cardWrapper}>
                    <Card title={item.title}>{item.content}</Card>
                </div>
            ))}
        </div>
    );
};
