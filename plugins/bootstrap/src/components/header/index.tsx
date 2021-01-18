import React from "react";
import Image from "next/image";

import { Logo, Container, A } from "@components";
import styles from "./index.module.<%= css_features %>";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.nav}>
                    <div className={styles.nav__brand}>
                        <Logo />
                        <div className={styles.menu}>
                            <A href="#" className={styles.menu__item}>
                                Docs
                            </A>
                        </div>
                    </div>

                    <A
                        href="https://github.com/pankod/next-cli"
                        target="_blank"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="nextjs"
                            width="28"
                            height="29"
                        />
                    </A>
                </div>
            </Container>
        </div>
    );
};
