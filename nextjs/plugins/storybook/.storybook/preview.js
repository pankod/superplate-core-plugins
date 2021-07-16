<%_ if (ui.includes("bootstrap")) { _%>
  import styles from "../src/styles/app.scss";
<%_ } _%>
<%_ if (css_features.includes("styled-components") || ui.includes("chakra-ui")) { _%>
import { addDecorator } from "@storybook/react";
<%_ } _%>
<%_ if (css_features.includes("styled-components")) { _%>
  import { withThemesProvider } from "storybook-addon-styled-component-theme";
  
  import { light } from "../src/definitions/styled-components/light"
  import { dark } from "../src/definitions/styled-components/dark"
<%_ } _%>

<%_ if (ui.includes("chakra-ui")) { _%>
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
<%_ } _%>

<%_ if (ui.includes("antd")) { _%>
import "antd/dist/antd.css";
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

<%_ if (ui.includes("chakra-ui")) { _%>
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

const withChakra = (StoryFn, context) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();
  return (
    <ChakraProvider theme={extendTheme({ direction: dir })}>
      <div dir={dir} id="story-wrapper" style={{ minHeight: "100vh" }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

addDecorator(withChakra)
<%_ } _%>
