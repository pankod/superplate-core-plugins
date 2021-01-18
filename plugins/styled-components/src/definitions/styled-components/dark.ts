// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
    colors: {
        background: "#000000",
        textColor: "#ffffff",
        ...common.colors,
    }
};

export { dark };