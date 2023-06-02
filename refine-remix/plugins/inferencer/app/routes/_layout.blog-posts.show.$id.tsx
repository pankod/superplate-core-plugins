import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ShowInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
import { inferencerPredefinedMeta } from "~/inferencerPredefinedMeta";
<%_ } _%>

export default function BlogPostShow() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ShowInferencer 
<%_ if (answers["data-provider"] === 'data-provider-appwrite') { _%>
fieldTransformer={(field) => {
  if (["$permissions", "$updatedAt"].includes(field.key)) {
    return false;
  }

  if (field.key === "$createdAt") {
    field.key = "created_at";
  }

  return field;
}}
<%_ } _%>
<%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
fieldTransformer={(field) => {
  if (["locale", "updatedAt", "publishedAt"].includes(field.key)) {
    return false;
  }

  return field;
}}
<%_ } _%>
<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
meta={inferencerPredefinedMeta}
<%_ } _%>
/>;
}