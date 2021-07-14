import React from "react";
import styles from "./index.module.css";

import { Logo } from "components/css";

export const Header: React.FC = () => {
    return (
        <div className={styles.header} <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
            <Logo />
        </div>
    );
};
