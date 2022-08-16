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
        import: [
            'import reactMDEStyle from "react-mde/lib/styles/css/react-mde-all.css";',
        ],
        styleImport: ['{ rel: "stylesheet", href: reactMDEStyle }'],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
