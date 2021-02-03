import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increase, decrease } from "@redux/actions";
import { RootState } from "@redux/reducers";
import styles from "./index.module.css";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);

    return (
        <div className={styles["box"]}>
            <div>
                <h2>Counter</h2>
                <button
                    className={[styles.button, styles["button--increase"]].join(
                        " ",
                    )}
                    type="button"
                    onClick={() => dispatch(increase())}
                >
                    +
                </button>
                <span className={styles["count"]}>{count}</span>
                <button
                    className={[styles.button, styles["button--decrease"]].join(
                        " ",
                    )}
                    type="button"
                    onClick={() => dispatch(decrease())}
                >
                    -
                </button>
            </div>

            <a
                className={styles["link"]}
                href="https://react-redux.js.org/"
                target="_blank"
            >
                Go To Documentation
            </a>
        </div>
    );
}
