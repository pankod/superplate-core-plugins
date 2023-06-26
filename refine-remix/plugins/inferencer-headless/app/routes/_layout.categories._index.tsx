import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ListInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
import { inferencerPredefinedMeta } from "~/inferencerPredefinedMeta";
<%_ } _%>

export default function CategoryList() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ListInferencer
    <%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
    meta={inferencerPredefinedMeta}
    <%_ } _%>
    <%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
    fieldTransformer={(field) => {
    if (["locale", "updatedAt", "publishedAt"].includes(field.key)) {
        return false;
    }
    return field;
    }}
    <%_ } _%>
    <%_ if (answers["data-provider"] === 'data-provider-appwrite') { _%>
        fieldTransformer={(field) => {
        if (["$permissions", "$updatedAt", "$createdAt"].includes(field.key)) {
            return false;
        }
        return field;
        }}
    <%_ } _%>
    />;
}