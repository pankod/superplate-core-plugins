const base = {
    _app: {
        localImport: [
            `import { PostList, PostShow, PostCreate, PostEdit } from "@components/posts";`,
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
