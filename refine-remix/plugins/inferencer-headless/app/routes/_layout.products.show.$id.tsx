import { <%- (_app.inferencer.componentPrefix || "") _%>ShowInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function ProductShow() {
    return <<%- (_app.inferencer.componentPrefix || "") _%>ShowInferencer />;
}