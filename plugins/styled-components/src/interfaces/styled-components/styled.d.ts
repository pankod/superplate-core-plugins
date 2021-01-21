// #region Global Imports
import "styled-components";
// #endregion Global Imports
type CommonColors =
    | "transparent"
    | "darkGrey"
    | "blackGrey"
    | "dodgerBlue"
    | "white"
;

type ExtendedColors =
    | CommonColors
    | "background"
    | "textColor"
;

declare module "styled-components" {
    export interface BaseTheme {
        colors: Record<CommonColors, string>;
    }

    export interface DefaultTheme extends BaseTheme {
        colors: Record<ExtendedColors, string>;
    }
}
