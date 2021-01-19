<%_ if (ui.includes("bootstrap")) { _%>
import styles from "../src/styles/app.scss";
<%_ } _%>

<%_ if (ui.includes("antd")) { _%>
import "antd/dist/antd.css";
<%_ } _%>

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
