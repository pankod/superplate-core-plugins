import React from "react";
import { useQuery } from "react-query";

import styles from "./index.module.css";

/**
 * This component is generated as an example for useQuery hook
 *
 * To learn more about React Query and data fetching,
 * please visit https://react-query.tanstack.com/
 */

const API_URL =
  "https://official-joke-api.appspot.com/jokes/programming/random";

export const ReactQueryExample = () => {

  const { data, refetch } = useQuery("repoData", () => 
    fetch(
      API_URL
    ).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
    }
  );

  const handleClick = () => {
    // manually refetch
    refetch();
  };

  if (data) {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h2>React Query Data Fetching Example</h2>
        </header>
        <main className={styles.content}>
          <p className={styles.title}>Programmer Jokes {`#${data[0].id}`}</p>
          <p className={styles.setup}>{data[0].setup}</p>
          <p className={styles.punchline}>{data[0].punchline}</p>
          <p className={styles.randomContainer}>
            <button className={styles.button} onClick={handleClick}>
              Give me another
            </button>
          </p>
        </main>
        <footer className={styles.footer}>
          <a
            className={styles.button}
            href="https://react-query.tanstack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To Documentation
          </a>
        </footer>
      </div>
    );
  }
  return null;
};
