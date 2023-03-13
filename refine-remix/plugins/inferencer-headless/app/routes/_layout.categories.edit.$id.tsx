import { <%- (_app.inferencer.componentPrefix || "") _%>EditInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function CategoryEdit() {
    return <<%- (_app.inferencer.componentPrefix || "") _%>EditInferencer />;
}