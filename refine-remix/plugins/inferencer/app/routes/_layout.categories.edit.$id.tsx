import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>EditInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
import { inferencerPredefinedMeta } from "~/inferencerPredefinedMeta";
<%_ } _%>

export default function CategoryEdit() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>EditInferencer
    <%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
    meta={inferencerPredefinedMeta}
    <%_ } _%>
    />;
}