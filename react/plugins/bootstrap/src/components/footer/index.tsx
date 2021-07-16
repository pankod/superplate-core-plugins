import React from "react";
<%_ if (features.includes("svgr")) { _%>
import { PankodIcon, GithubIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from "components/icons";
<%_ } _%>

export const Footer: React.FC = () => {
    return (
        <div
            className="text-center py-4"
            style={{ backgroundColor: "#282c34" }}
        >
            <a
                href="https://github.com/pankod"
                target="_blank"
                className="d-block mb-3"
                <%_ if (testing === 'testing-library') { _%>   
                data-testid="pankod-logo"
                <%_ } _%>
            >
                <%_ if (features.includes("svgr")) { _%>
                <PankodIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="140" height="28" />
                <%_ } else { _%>
                <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
                <%_ } _%>
            </a>

            <ul className="d-flex justify-content-center list-unstyled p-0 m-0" <% if (testing === 'testing-library') { %> data-testid="icons-container" <% } %> >
                <li className="mx-2">
                    <%_ if (features.includes("svgr")) { _%>
                    <GithubIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="29" />
                    <%_ } else { _%>
                    <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/github-icon.svg" alt="github" width="28" height="29" />
                    <%_ } _%>
                </li>
                <li className="mx-2">
                    <%_ if (features.includes("svgr")) { _%>
                    <TwitterIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="28" />
                    <%_ } else { _%>
                    <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/twitter-icon.svg" alt="twitter" width="28" height="28" />
                    <%_ } _%>
                </li>
                <li className="mx-2">
                    <%_ if (features.includes("svgr")) { _%>
                    <YoutubeIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="29" />
                    <%_ } else { _%>
                    <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
                    <%_ } _%>
                </li>
                <li className="mx-2">
                    <%_ if (features.includes("svgr")) { _%>
                    <LinkedinIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="28" height="32" />
                    <%_ } else { _%>
                    <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
                    <%_ } _%>
                </li>
            </ul>
        </div>
    );
};
