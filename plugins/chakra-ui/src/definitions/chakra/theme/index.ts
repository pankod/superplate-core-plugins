import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";

import colors from "./foundations/colors";

import fontSizes from "./foundations/fontSizes";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

const overrides = {
    ...styles,
    colors,
    fontSizes,
};

const theme = extendTheme(overrides);

export default theme;
