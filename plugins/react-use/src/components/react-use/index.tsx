import React from "react";
import { usePrevious, useWindowSize } from "react-use";

import styles from "./index.module.css";

/**
 * This component is created as an example for React-use hooks
 *
 * To learn more about react-use and it's hooks
 * please visit https://github.com/streamich/react-use
 */

export const ReactUseExample = () => {
    const [count, setCount] = React.useState(0);
    const prevCount = usePrevious(count);
    const { width, height } = useWindowSize();
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h2>React Use Example</h2>
                <p>
                    react-use has various hooks that you can use with ease. To
                    learn more about react-use please check out their
                    documentation.
                </p>
            </header>
            <main className={styles.content}>
                <div className={styles.hook}>
                    <p className={styles.hookName}>usePrevious</p>
                    <p className={styles.hookOutput}>
                        Now: {count}, before: {prevCount}
                    </p>
                    <p className={styles.hookInput}>
                        <button
                            className={styles.button}
                            onClick={() => setCount(count + 1)}
                        >
                            Increment
                        </button>
                        <button
                            className={styles.button}
                            onClick={() => setCount(count - 1)}
                        >
                            Decrement
                        </button>
                    </p>
                </div>
                <div className={styles.hook}>
                    <p className={styles.hookName}>useWindowSize</p>
                    <p className={styles.hookOutput}>
                        width: {`${width}px`}, height: {`${height}px`}
                    </p>
                </div>
            </main>
            <footer className={styles.footer}>
                <a
                    className={styles.button}
                    href="https://github.com/streamich/react-use"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Go To Documentation
                </a>
            </footer>
        </div>
    );
};
