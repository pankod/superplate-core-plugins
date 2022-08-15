<%_ if (answers["antd-custom-layout"] === "no") { _%>
    export * from "./header";
<%_ } else { _%>
    export * from "./footer";
    export * from "./header";
    export * from "./sider";
    export * from "./layout";
    export * from "./offLayoutArea";
    export * from "./title";
<%_ } _%>