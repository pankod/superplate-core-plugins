import { <%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function ProductCreate() {
    return <<%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer />;
}