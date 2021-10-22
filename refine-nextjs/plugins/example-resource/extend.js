const base = {
    _app: {
        refineImports: [`Resource`],
        import: [
            `import { PostList, PostCreate, PostEdit, PostShow } from "src/components/posts";`,
        ],
        inner: [],
        children: [
            `<Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} canDelete />`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
