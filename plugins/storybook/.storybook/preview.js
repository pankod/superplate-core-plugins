<%_ if (ui.includes("bootstrap")) { _%>
  import styles from "../src/styles/app.scss";
<%_ } _%>
<%_ if (css_features.includes("styled-components")) { _%>
  import { addDecorator } from "@storybook/react";
  import { withThemesProvider } from "storybook-addon-styled-component-theme";
  
  import { light } from "../src/definitions/styled-components/light"
  import { dark } from "../src/definitions/styled-components/dark"
<%_ } _%>

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

<%_ if (css_features.includes("styled-components")) { _%>

  const lightTheme = {
    name: "LIGHT",
    ...light
  };
  
  const darkTheme = {
    name: "DARK",
    ...dark
  };

  export const getAllThemes = () => {
    return [lightTheme, darkTheme];
  };
  
  addDecorator(withThemesProvider(getAllThemes()));
<%_ } _%>