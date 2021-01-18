import React from "react";
import cx from "classnames";
import Image from "next/image";

import { Container } from "@components";
import styles from "./index.module.scss";

export const Footer: React.FC = () => {
    return (
        <div className={cx(styles.footer)}>
            <Container className="text-center">
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
            </Container>
        </div>
    );
};
