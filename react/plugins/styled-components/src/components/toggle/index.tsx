import React from 'react'
    
<%_ if (features.includes("svgr")) { _%>
import { SunIcon, MoonIcon } from "components/icons";
<%_ } _%>

import { useTheme } from 'definitions/styled-components';
import { ToggleContainer } from "./styled";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Toggle: React.FC<IButton> = () => {
  const { toggle, themeName } = useTheme();

  return (
    <ToggleContainer 
      themeName={themeName} 
      onClick={toggle}
      <%_ if (testing === 'testing-library') { _%>   
      data-testid="toggle"
      <%_ } _%>
    >
      <%_ if (features.includes("svgr")) { _%>
      <SunIcon width="32" height="32" />
      <%_ } else { _%>
      <img src="/icons/sun-icon.svg" alt="sun" width="32" height="32" />
      <%_ } _%>
      <%_ if (features.includes("svgr")) { _%>
      <MoonIcon width="32" height="32" />
      <%_ } else { _%>
      <img src="/icons/moon-icon.svg" alt="moon" width="32" height="32" />
      <%_ } _%>
    </ToggleContainer>
  );
};


