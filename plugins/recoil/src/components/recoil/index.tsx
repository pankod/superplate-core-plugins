import React from "react";
import { useRecoilState } from "recoil";

import { counter } from "@recoil/atoms";

import styles from "./index.module.css";

/**
 * This component is provided as an example usage of Recoil in components
 *
 * To learn more about Recoil and state management
 * please visit https://recoiljs.org
 */

export const RecoilExample: React.FC = () => {
  const [count, setCount] = useRecoilState(counter);

  const increase = () => {
    setCount((current) => current + 1);
  };

  const decrease = () => {
    setCount((current) => current - 1);
  };

  return (
    <div className={styles["box"]}>
      <div>
        <h2>Recoil Counter</h2>
        <button
          className={[styles.button, styles["button--increase"]].join(" ")}
          type="button"
          onClick={increase}
        >
          +
        </button>
        <span className={styles["count"]}>{count}</span>
        <button
          className={[styles.button, styles["button--decrease"]].join(" ")}
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
