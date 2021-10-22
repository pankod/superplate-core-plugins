export { Header} from "./header";
<%_ if (answers["custom-layout"] !== 'no') { _%>
export { Footer } from "./footer";
export { Sider } from "./sider";
export { Layout } from "./layout";
export { OffLayoutArea } from "./offLayoutArea";
export { Title } from "./title";
<%_ } _%>
