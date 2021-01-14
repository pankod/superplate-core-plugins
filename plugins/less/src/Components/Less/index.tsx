import React from "react";
import styles from "./index.less";
/**
 * This component is generated as an example to usage of LESS Modules.
 *
 * To learn more about Less
 * please visit http://lesscss.org/
 *
 */

export const LessExample: React.FC = () => {
  return (
    <div className={styles.card}>
      <header className={styles["card__header"]}>
        <h2>LESS Example</h2>
      </header>
      <main className={styles["card__content"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, officiis
          dolor eaque optio quam deserunt nesciunt tempore iste unde cum eius
          explicabo debitis non nostrum incidunt natus. Molestiae, veritatis
          quo.
        </p>
        <p>
          A cupiditate quae quidem accusamus, sint dolores distinctio doloribus
          earum culpa quas facilis repellendus soluta illo provident eaque
          inventore sapiente molestias atque dolor ipsam autem eveniet dolorem.
          Quibusdam, nostrum cupiditate.
        </p>
      </main>
      <footer className={styles["card__footer"]}>
        <a
          href="http://lesscss.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Go To Documentation
        </a>
      </footer>
    </div>
  );
};
