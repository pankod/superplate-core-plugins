const base = {
    _app: {
        localImport: [
            `import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";`,
        ],
        refineProps: [
            `resources={[
                {
                    name: "posts",
                    list: PostList,
                    show: PostShow,
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
