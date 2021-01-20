import React from "react";

import { useCounter } from "@recoil/hooks";

import styles from "./index.module.css";

/**
 * This component is provided as an example usage of Recoil in components
 *
 * To learn more about Recoil and state management
 * please visit https://recoiljs.org
 */

export const RecoilExample: React.FC = () => {
    const [count, { increase, decrease }] = useCounter();

    return (
        <div className={styles["box"]}>
            <div>
                <h2>Recoil Counter</h2>
                <button
                    className={[styles.button, styles["button--increase"]].join(
                        " ",
                    )}
                    type="button"
                    onClick={increase}
                >
                    +
                </button>
                <span className={styles["count"]}>{count}</span>
                <button
                    className={[styles.button, styles["button--decrease"]].join(
                        " ",
                    )}
                    type="button"
                    onClick={decrease}
                >
                    -
                </button>
            </div>

            <a
                className={styles["link"]}
                href="https://recoiljs.org/"
                target="_blank"
            >
                Go To Documentation
            </a>
        </div>
    );
};
