export interface IPost {
  id: string;
  title: string;
  content: string;
  <%_ if (dataProvider === "nestjsx-crud-data-provider") { _%>
  status: "published" | "draft" | "rejected";
  <%_ } _%>
  createdAt: string;
}
