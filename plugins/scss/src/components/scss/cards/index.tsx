import React from "react";
import styles from "./index.module.scss";

import { Card } from "@components/scss";

export const Cards: React.FC = () => {
    const data: { title: string; content: string }[] = [
        {
            title: "Redux",
            content:
                "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
    ];

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
