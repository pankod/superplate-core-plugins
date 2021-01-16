// prettier-ignore
<%_ if (ui.includes("bootstrap")) { _%>
import styles from "../src/styles/app.scss";
// prettier-ignore
<%_ } _%>

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
