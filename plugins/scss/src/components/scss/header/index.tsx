import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/scss";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    );
};
