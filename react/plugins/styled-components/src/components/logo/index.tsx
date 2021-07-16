import React from "react";
    
<%_ if (features.includes("svgr")) { _%>
import { ReactIcon } from "components/icons";
<%_ } _%>

export const Logo: React.FC = () => {
  return (
    <%_ if (features.includes("svgr")) { _%>
    <ReactIcon color="white" width="96" height="58" />
    <%_ } else { _%>
    <img src="/icons/react-icon.svg" alt="react" width="96" height="58" />
    <%_ } _%>
  )
};
