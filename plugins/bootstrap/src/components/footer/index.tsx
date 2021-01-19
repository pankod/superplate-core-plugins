import React, { CSSProperties } from "react";
import Image from "next/image";

import styles from "./index.module.css";

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <Image src="/pankod.svg" alt="nextjs" width="140" height="28" />

            <ul className={styles.social}>
                <li className={styles.social__item}>
                    <Image
                        src="/icons/github.svg"
                        alt="nextjs"
                        width="28"
                        height="29"
                    />
                </li>
                <li className={styles.social__item}>
                    <Image
                        src="/icons/twitter.svg"
                        alt="nextjs"
                        width="28"
                        height="28"
                    />
                </li>
                <li className={styles.social__item}>
                    <Image
                        src="/icons/youtube.svg"
                        alt="nextjs"
                        width="28"
                        height="29"
                    />
                </li>
                <li className={styles.social__item}>
                    <Image
                        src="/icons/linkedin.svg"
                        alt="nextjs"
                        width="28"
                        height="32"
                    />
                </li>
            </ul>
        </div>
    );
};
