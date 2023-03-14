import { <%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function CategoryCreate() {
    return <<%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer />;
}