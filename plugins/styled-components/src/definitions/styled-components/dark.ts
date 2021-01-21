// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
  colors: {
    body: '#363537',
    toggleBorder: '#556678',
    gradient: 'linear-gradient(#091236, #1E215D)',
    
    background: "#808080",
    textColor: "#FFFFFF",
    ...common.colors,
  },
};

export { dark };
