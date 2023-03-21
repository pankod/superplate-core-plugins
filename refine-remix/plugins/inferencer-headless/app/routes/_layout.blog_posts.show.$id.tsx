import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ShowInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function BlogPostShow() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ShowInferencer />;
}