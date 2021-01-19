import React from "react";
import cx from "classnames";
import Image from "next/image";

import { Container } from "@components";
<%_ if (features.includes("svgr")) { _%>
import { Github, Twitter, Youtube, Linkedin } from "@components/icons";
<%_ } _%>
import styles from "./index.module.<%= css_features %>";

export const Footer: React.FC = () => {
    return (
        <div className={cx(styles.footer)}>
            <Container className="text-center">
                <Image src="/pankod.svg" alt="nextjs" width="140" height="28" />
                <ul className={styles.social}>
                    <li className={styles.social__item}>
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
                    </li>
                    <li className={styles.social__item}>
                        <%_ if (!features.includes("svgr")) { _%>
                        <Image
                            src="/icons/twitter.svg"
                            alt="nextjs"
                            width="28"
                            height="28"
                        />
                        <%_ } _%>
                        <%_ if (features.includes("svgr")) { _%>
                        <Twitter
                            width="28"
                            height="28"
                            color="white"
                        />
                        <%_ } _%>
                    </li>
                    <li className={styles.social__item}>
                        <%_ if (!features.includes("svgr")) { _%>
                        <Image
                            src="/icons/youtube.svg"
                            alt="nextjs"
                            width="28"
                            height="29"
                        />
                        <%_ } _%>
                        <%_ if (features.includes("svgr")) { _%>
                        <Youtube
                            width="28"
                            height="29"
                            color="white"
                        />
                        <%_ } _%>
                    </li>
                    <li className={styles.social__item}>
                        <%_ if (!features.includes("svgr")) { _%>
                        <Image
                            src="/icons/linkedin.svg"
                            alt="nextjs"
                            width="28"
                            height="32"
                        />
                        <%_ } _%>
                        <%_ if (features.includes("svgr")) { _%>
                        <Linkedin
                            width="28"
                            height="32"
                            color="white"
                        />
                        <%_ } _%>
                    </li>
                </ul>
            </Container>
        </div>
    );
};
