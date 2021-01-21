// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
  colors: {
    body: '#E2E2E2',
    toggleBorder: '#ABB7C4',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    
    background: "#FFFFFF",
    textColor: "#000000",
    ...common.colors,
  },
};

export { light };
