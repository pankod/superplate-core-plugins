import React from "react";
import styles from "./index.module.css";

export const EnvExample = () => {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={`${styles.col} ${styles.title}`}>
                    NEXT_PUBLIC_ENV_VARIABLE
                </div>
                <div className={`${styles.col} ${styles.value}`}>
                    {process.env.NEXT_PUBLIC_ENV_VARIABLE}
                </div>
                <div className={`${styles.col} ${styles.title}`}>
                    NEXT_PUBLIC_ENV_LOCAL_VARIABLE
                </div>
                <div className={`${styles.col} ${styles.value}`}>
                    {process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}
                </div>
                <div className={`${styles.col} ${styles.title}`}>
                    NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE
                </div>
                <div className={`${styles.col} ${styles.value}`}>
                    {process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}
                </div>
                <div className={`${styles.col} ${styles.title}`}>
                    NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE
                </div>
                <div className={`${styles.col} ${styles.value}`}>
                    {process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE ??
                        "undefined"}
                </div>
            </div>
        </div>
    );
};
