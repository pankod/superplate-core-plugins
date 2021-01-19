import React from "react";
<%_ if (!features.includes("svgr")) { _%>
import Image from "next/image";
<%_ } _%>

import { Logo, Container, A } from "@components";
import styles from "./index.module.<%= css_features %>";
<%_ if (features.includes("svgr")) { _%>
import { Github } from "@components/icons";
<%_ } _%>


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
                        <%_ if (!features.includes("svgr")) { _%>
                        <Image
                            src="/icons/github.svg"
                            alt="nextjs"
                            width="28"
                            height="29"
                        />
                        <%_ } _%>
                        <%_ if (features.includes("svgr")) { _%>
                        <Github
                            width="28"
                            height="29"
                            color="white"
                        />
                        <%_ } _%>

                    </A>
                </div>
            </Container>
        </div>
    );
};
