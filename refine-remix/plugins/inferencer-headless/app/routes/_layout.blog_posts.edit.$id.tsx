import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>EditInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function BlogPostEdit() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>EditInferencer />;
}