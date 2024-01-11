import gql from "graphql-tag";

/**
 * This `meta` object is used to define the necessary metadata for inferencer to work with.
 *
 * They will be used to infer the fields of the response of the data provider.
 * Also they will be included in the generated code, making them easily editable after you generate the boilerplate code for your resource.
 */
export const inferencerPredefinedMeta = {
    blog_posts: {
        getList: {
            gqlQuery: gql`
                query BlogPostsList(
                    $offset: Int!
                    $limit: Int!
                    $order_by: [blog_posts_order_by!]
                    $where: blog_posts_bool_exp
                ) {
                    blog_posts(
                        offset: $offset
                        limit: $limit
                        order_by: $order_by
                        where: $where
                    ) {
                        id
                        title
                        content
                        category_id
                        created_at
                        status
                        category {
                            id
                            title
                        }
                    }
                    blog_posts_aggregate(where: $where) {
                        aggregate {
                            count
                        }
                    }
                }
            `,
        },
        getOne: {
            gqlQuery: gql`
                query GetBlogPost($id: uuid!) {
                    blog_posts_by_pk(id: $id) {
                        id
                        title
                        content
                        category_id
                        created_at
                        status
                        category {
                            id
                            title
                        }
                    }
                }
            `,
        },
        create: {
            foo: "bar",
            objFoo: {
                bar: "baz",
            },
            gqlMutation: gql`
                mutation CreateBlogPosts($object: blog_posts_insert_input!) {
                    insert_blog_posts_one(object: $object) {
                        id
                        title
                        content
                        created_at
                        category_id
                        status
                        category {
                            id
                            title
                        }
                    }
                }
            `,
        },
        update: {
            gqlMutation: gql`
                mutation UpdateBlogPosts(
                    $id: uuid!
                    $object: blog_posts_set_input!
                ) {
                    update_blog_posts_by_pk(
                        pk_columns: { id: $id }
                        _set: $object
                    ) {
                        id
                        title
                        content
                        created_at
                        category_id
                        status
                        category {
                            id
                            title
                        }
                    }
                }
            `,
        },
    },
    categories: {
        default: {
            gqlQuery: gql`
                query CategoriesList(
                    $offset: Int
                    $limit: Int
                    $order_by: [categories_order_by!]
                    $where: categories_bool_exp
                ) {
                    categories(
                        offset: $offset
                        limit: $limit
                        order_by: $order_by
                        where: $where
                    ) {
                        id
                        title
                        created_at
                    }
                    categories_aggregate(where: $where) {
                        aggregate {
                            count
                        }
                    }
                }
            `,
        },
        getList: {
            gqlQuery: gql`
                query CategoriesList(
                    $offset: Int
                    $limit: Int
                    $order_by: [categories_order_by!]
                    $where: categories_bool_exp
                ) {
                    categories(
                        offset: $offset
                        limit: $limit
                        order_by: $order_by
                        where: $where
                    ) {
                        id
                        title
                        created_at
                    }
                    categories_aggregate(where: $where) {
                        aggregate {
                            count
                        }
                    }
                }
            `,
        },
        getOne: {
            gqlQuery: gql`
                query GetCategory($id: uuid!) {
                    categories_by_pk(id: $id) {
                        id
                        title
                        created_at
                    }
                }
            `,
        },
        create: {
            gqlMutation: gql`
                mutation CreateCategory($object: categories_insert_input!) {
                    insert_categories_one(object: $object) {
                        id
                        title
                        created_at
                    }
                }
            `,
        },
        update: {
            gqlMutation: gql`
                mutation UpdateCategory(
                    $id: uuid!
                    $object: categories_set_input!
                ) {
                    update_categories_by_pk(
                        pk_columns: { id: $id }
                        _set: $object
                    ) {
                        id
                        title
                        created_at
                    }
                }
            `,
        },
    },
};
