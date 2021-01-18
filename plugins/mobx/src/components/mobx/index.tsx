import { observer } from "mobx-react";
import { useRootStore } from "@mobx";

import styles from "./index.module.css";

export const MobxExample: React.FC = observer(() => {
    const { counterStore } = useRootStore();
    const { count, increase, decrease } = counterStore;

    return (
        <div className={styles["box"]}>
            <div>
                <h2>Counter</h2>
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
                href="https://react-redux.js.org/"
                target="_blank"
            >
                Go To Documentation
            </a>
        </div>
    );
});
