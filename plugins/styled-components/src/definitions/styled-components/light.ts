// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
    colors: {
        background: "#ffffff",
        textColor: "#000000",
        ...common.colors,
    }
};

export { light };
