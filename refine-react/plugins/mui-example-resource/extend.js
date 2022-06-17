const base = {
    _app: {
        localImport: [
            `import { PostList, PostCreate, PostEdit } from "pages/posts";`,
        ],
        refineProps: [
            `resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
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
