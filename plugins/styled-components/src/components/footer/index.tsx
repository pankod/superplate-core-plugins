import React from "react";
<%_ if (!features.includes("svgr")) { _%>
import Image from "next/image";
<%_ } _%>
  
<%_ if (features.includes("svgr")) { _%>
import { PankodIcon, GithubIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from "@components/icons";
<%_ } _%>
import { Container, LogoButton, List, ListItem } from "./styled";

export const Footer: React.FC = () => {
  return (
    <Container>
      <LogoButton
        href="https://github.com/pankod"
        target="_blank"
        <%_ if (testing === 'testing-library') { _%>   
        data-testid="pankod-logo"
        <%_ } _%>
      >
        <%_ if (features.includes("svgr")) { _%>
        <PankodIcon color="white" width="140" height="28" />
        <%_ } else { _%>
        <Image src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
        <%_ } _%>
      </LogoButton>
      <List <% if (testing === 'testing-library') { %> data-testid="icons-container" <% } %> >
        <ListItem>
          <%_ if (features.includes("svgr")) { _%>
          <GithubIcon color="white" width="28" height="29" />
          <%_ } else { _%>
          <Image src="/icons/github-icon.svg" alt="github" width="28" height="29" />
          <%_ } _%>
        </ListItem>
        <ListItem>
          <%_ if (features.includes("svgr")) { _%>
          <TwitterIcon color="white" width="28" height="28" />
          <%_ } else { _%>
          <Image src="/icons/twitter-icon.svg" alt="twitter" width="28" height="28" />
          <%_ } _%>
        </ListItem>
        <ListItem>
          <%_ if (features.includes("svgr")) { _%>
          <YoutubeIcon color="white" width="28" height="29" />
          <%_ } else { _%>
          <Image src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
          <%_ } _%>
        </ListItem>
        <ListItem>
          <%_ if (features.includes("svgr")) { _%>
          <LinkedinIcon color="white" width="28" height="32" />
          <%_ } else { _%>
          <Image src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
          <%_ } _%>
        </ListItem>
      </List>
    </Container>
  );
};
