const base = {
    _app: {
        localImport: [
            `import { BlogPostList, BlogPostCreate, BlogPostEdit, BlogPostShow } from "./pages/blog-posts";`,
            `import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "./pages/categories";`,
        ],
    },
};

module.exports = {
    extend(answers) {
        // Add example page imports when shadcn-example is selected
        const dataProvider = answers["data-provider"];

        // Only add if not graphql data provider (same condition as _base/extend.js)
        if (!["data-provider-graphql"].includes(dataProvider)) {
            return base;
        }

        return { _app: {} };
    },
};
