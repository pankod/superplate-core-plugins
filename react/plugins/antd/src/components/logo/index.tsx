import React from "react";

<%_ if (features.includes("svgr")) { _%>
import { ReactIcon } from "components/icons";
<%_ } _%>

export const Logo: React.FC = () => {
  return <%_ if (features.includes("svgr")) { _%>
        <ReactIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="96" height="58" />
        <%_ } else { _%>
        <img <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/react-icon.svg" alt="nextjs" width="96" height="58" />;
        <%_ } _%>
};
