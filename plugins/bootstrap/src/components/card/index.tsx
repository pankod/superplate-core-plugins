import React from "react";

import styles from "./index.module.scss";

export interface ICard {
  title: string;
  content: string;
}

export const Card: React.FC<ICard> = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
