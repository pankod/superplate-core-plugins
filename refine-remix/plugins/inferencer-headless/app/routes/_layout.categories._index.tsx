import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ListInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function CategoryList() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ListInferencer />;
}