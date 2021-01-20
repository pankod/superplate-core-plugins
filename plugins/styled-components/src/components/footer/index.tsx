import React from "react";
import Image from "next/image";

import { Container, LogoButton, List, ListItem } from "./styled";

export const Footer: React.FC = () => {
    return (
        <Container>
            <LogoButton
                href="http://pankod.com"
                target="_blank"
            >
                <Image src="/pankod.svg" alt="pankod" width="140" height="28" />
            </LogoButton>
            <List>
                <ListItem>
                    <Image
                        src="/icons/github.svg"
                        alt="nextjs"
                        width="28"
                        height="29"
                    />
                </ListItem>
                <ListItem>
                    <Image
                        src="/icons/twitter.svg"
                        alt="nextjs"
                        width="28"
                        height="28"
                    />
                </ListItem>
                <ListItem>
                    <Image
                        src="/icons/youtube.svg"
                        alt="nextjs"
                        width="28"
                        height="29"
                    />
                </ListItem>
                <ListItem>
                    <Image
                        src="/icons/linkedin.svg"
                        alt="nextjs"
                        width="28"
                        height="32"
                    />
                </ListItem>
            </List>
        </Container>
    );
};
