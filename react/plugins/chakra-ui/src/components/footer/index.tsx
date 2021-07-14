import React, { CSSProperties } from "react";
import { Flex, Center } from "@chakra-ui/react"

<%_ if (features.includes("svgr")) { _%>
import { PankodIcon, GithubIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from "components/icons";
<%_ } _%>

export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
        marginRight: "0.25rem",
        marginLeft: "0.25rem"
    };
    return (
        <Center bg="main.100" py={10}>
            <Flex flexDirection="column">
                <a href="https://github.com/pankod" target="_blank" <% if (testing === 'testing-library') { %> data-testid="pankod-logo" <% } %> >
                    <%_ if (features.includes("svgr")) { _%>
                    <PankodIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="140" height="28" />
                    <%_ } else { _%>    
                    <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
                    <%_ } _%>
                </a>
                <Flex mt={5} <% if (testing === 'testing-library') { %> data-testid="icons-container" <% } %> >
                    <a
                        href="https://github.com/pankod"
                        target="_blank"
                        style={iconStyle}
                    >
                        <%_ if (features.includes("svgr")) { _%>
                        <GithubIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="29" />
                        <%_ } else { _%>
                        <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/github-icon.svg" alt="github" width="28" height="29" />
                        <%_ } _%>
                    </a>
                    <a
                        href="https://twitter.com/PankodDev"
                        target="_blank"
                        style={iconStyle}
                    >
                        <%_ if (features.includes("svgr")) { _%>
                        <TwitterIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="28" />
                        <%_ } else { _%>
                        <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %>src="/icons/twitter-icon.svg" alt="twitter" width="28" height="28" />
                        <%_ } _%>
                        </a>
                    <a
                        href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
                        target="_blank"
                        style={iconStyle}
                    >
                        <%_ if (features.includes("svgr")) { _%>
                        <YoutubeIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="29" />
                        <%_ } else { _%>
                        <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
                        <%_ } _%>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                        target="_blank"
                        style={iconStyle}
                    >
                        <%_ if (features.includes("svgr")) { _%>
                        <LinkedinIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="32" />
                        <%_ } else { _%>
                        <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
                        <%_ } _%>
                    </a>
                </Flex>
            </Flex>
        </Center>
    );
};
