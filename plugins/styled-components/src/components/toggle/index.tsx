import React from 'react'
import Image from "next/image";

import { ToggleContainer } from "./styled";
import { useTheme } from '@definitions/styled-components';

export const Toggle: React.FC = () => {

  const { toggle, themeName } = useTheme();

  return (
    <ToggleContainer themeName={themeName} onClick={toggle}>
      <Image src="/icons/sun.svg" alt="sun" width="32" height="32" />
      <Image src="/icons/half-moon.svg" alt="moon" width="32" height="32" />
    </ToggleContainer>
  );
};


