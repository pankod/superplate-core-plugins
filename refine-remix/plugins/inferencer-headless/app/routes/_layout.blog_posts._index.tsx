import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ListInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function BlogPostList() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ListInferencer />;
}