const base = {
    _app: {
        refineImports: [`Resource`],
        import: [
            `import { PostList, PostCreate, PostEdit } from "./pages/posts";`,
        ],
        inner: [],
        children: [
            `<Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
