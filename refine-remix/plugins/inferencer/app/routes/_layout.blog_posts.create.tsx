import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function BlogPostCreate() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer />;
}