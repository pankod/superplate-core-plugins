import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>EditInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function BlogPostEdit() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>EditInferencer 
<%_ if (answers["data-provider"] === 'data-provider-appwrite') { _%>
fieldTransformer={(field: any) => {
  if (["$permissions", "$updatedAt"].includes(field.key)) {
    return false;
  }

  if (field.key === "$createdAt") {
    field.key = "created_at";
    field.title = "Created At";
  }

  return field;
}}
<%_ } _%>
<%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
fieldTransformer={(field: any) => {
  if (["locale", "updatedAt", "publishedAt"].includes(field.key)) {
    return false;
  }

  return field;
}}
<%_ } _%>
/>;
}