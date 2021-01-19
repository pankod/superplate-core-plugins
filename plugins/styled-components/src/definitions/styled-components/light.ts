// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
    colors: {
        background: "#f5deb3",
        textColor: "#000000",
        ...common.colors,
    }
};

export { light };
