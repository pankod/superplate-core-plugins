export * from "./common";
export * from "./dark";
export * from "./light";

import React, { useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
};