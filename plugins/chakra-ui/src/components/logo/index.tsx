import React from "react";
<%_ if (!features.includes("svgr")) { _%>
import Image from "next/image";
<%_ } _%>

<%_ if (features.includes("svgr")) { _%>
import { NextjsIcon } from "@components/icons";
<%_ } _%>

export const Logo: React.FC = () => {
  return <%_ if (features.includes("svgr")) { _%>
        <NextjsIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="96" height="58" />
        <%_ } else { _%>
        <Image <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/nextjs-icon.svg" alt="nextjs" width="96" height="58" />;
        <%_ } _%>
};
