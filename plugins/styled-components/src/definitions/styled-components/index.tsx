export * from "./common";
export * from "./dark";
export * from "./light";

import React from "react";
import { dark } from "./dark";
import { light } from "./light";
import { ThemeProvider } from "styled-components";

export const ThemeContext = React.createContext({
  theme: "light",
  toggle: () => {},
});

export const useTheme = () => {
  const { theme, toggle } = React.useContext(ThemeContext);
  
  return { theme: theme === "light" ? light : dark, toggle, themeName: theme }
};

export const StyledThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  const values = React.useMemo(
      () => ({
          theme,
          toggle,
      }),
      [toggle, theme]
  );

  return (
      <ThemeContext.Provider value={values}>
        <ThemeProvider theme={theme === "light" ? light : dark}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
  );
};