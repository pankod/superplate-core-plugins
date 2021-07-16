import React from "react";
import styles from "./index.module.css";
import { Button } from "components/css";

export const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <h1 <% if(!(e2etest === "none")) { %>  data-test="main-heading" <% } %> >superplate</h1>
            <p>
                The frontend boilerplate with superpowers!
            </p>
            <Button <% if(!(e2etest==="none" )) { %> data-test="docs-btn-anchor" <% } %> >
                Docs
            </Button>
        </div>
    );
};
