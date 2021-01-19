// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
    colors: {
        background: "#d5b0f5",
        textColor: "#ffffff",
        ...common.colors,
    }
};

export { dark };