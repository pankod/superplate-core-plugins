const base = {
    _app: {
        localImport: [
            `import { PostList, PostCreate, PostEdit, PostShow } from "@components/posts";`,
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
            ]}`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
