import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, IResourceComponentsProps, useMany } from "@refinedev/core";
import { Space, Table } from "antd";
import React from "react";
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from "../queries/blog-posts";
<%_ } _%>

export default function BlogPostList() {
  const { tableProps } = useTable({
      syncWithLocation: true,
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
      meta: {
          fields: BLOG_POSTS_QUERY,
      },
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-strapi-v4") { _%>
      meta: {
          populate: ['category'],
      },
<%_ } _%>
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
      resource: "categories",
      ids: tableProps?.dataSource?.map((item) => item?.category?.id).filter(Boolean) ?? [],
      queryOptions: {
          enabled: !!tableProps?.dataSource,
      },
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
      meta: {
          fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
      },
<%_ } _%>
  });

  return (
      <List>
          <Table {...tableProps} rowKey="id">
              <Table.Column dataIndex="id" title={"ID"} />
              <Table.Column dataIndex="title" title={"Title"} />
              <Table.Column
                  dataIndex="content"
                  title={"Content"}
                  render={(value: any) => {
                      if (!value) return '-'
                      return <MarkdownField value={value.slice(0, 80) + '...'} />
                  }}
              />
              <Table.Column
                  dataIndex={["category", "id"]}
                  title={"Category"}
                  render={(value) =>
                      categoryIsLoading ? (
                          <>Loading...</>
                      ) : (
                          categoryData?.data?.find(
                              (item) => item.id === value,
                          )?.title
                      )
                  }
              />
              <Table.Column dataIndex="status" title={"Status"} />
              <Table.Column
<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>  
                  dataIndex={["created_at"]}      
<%_ } else { _%>
                  dataIndex={["createdAt"]}
<%_ } _%>        
                  title={"Created at"}
                  render={(value: any) => <DateField value={value} />}
              />
              <Table.Column
                  title={"Actions"}
                  dataIndex="actions"
                  render={(_, record: BaseRecord) => (
                      <Space>
                          <EditButton
                              hideText
                              size="small"
                              recordItemId={record.id}
                          />
                          <ShowButton
                              hideText
                              size="small"
                              recordItemId={record.id}
                          />
                          <DeleteButton
                              hideText
                              size="small"
                              recordItemId={record.id}
                          />
                      </Space>
                  )}
              />
          </Table>
      </List>
  );
};
