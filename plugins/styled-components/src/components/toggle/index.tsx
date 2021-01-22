import React from 'react'
<%_ if (!features.includes("svgr")) { _%>
import Image from "next/image";
<%_ } _%>
    
<%_ if (features.includes("svgr")) { _%>
import { SunIcon, MoonIcon } from "@components/icons";
<%_ } _%>

import { useTheme } from '@definitions/styled-components';
import { ToggleContainer } from "./styled";

export const Toggle: React.FC = () => {

  const { toggle, themeName } = useTheme();

  return (
    <ToggleContainer themeName={themeName} onClick={toggle}>
      <%_ if (features.includes("svgr")) { _%>
      <SunIcon width="32" height="32" />
      <%_ } else { _%>
      <Image src="/icons/sun.svg" alt="sun" width="32" height="32" />
      <%_ } _%>
      <%_ if (features.includes("svgr")) { _%>
      <MoonIcon width="32" height="32" />
      <%_ } else { _%>
      <Image src="/icons/half-moon.svg" alt="moon" width="32" height="32" />
      <%_ } _%>
    </ToggleContainer>
  );
};


