const base = {
    _app: {
        import: [
            `import { PostList, PostCreate, PostEdit, PostShow } from "src/components/posts";`,
        ],
        refineProps: [
            `resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}`
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
