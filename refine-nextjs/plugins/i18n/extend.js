const base = {
    _app: {
        import: [
            `import { appWithTranslation, useTranslation } from "next-i18next";`,
            `import { Header } from "@components";`,
            `import { PostList, PostCreate, PostEdit, PostShow } from "@components/posts";`,
        ],
        innerHooks: [
            `const { t, i18n } = useTranslation();`,
        ],
        inner: [
            `
            const i18nProvider = {
                translate: (key: string, params: object) => t(key, params),
                changeLocale: (lang: string) => i18n.changeLanguage(lang),
                getLocale: () => i18n.language,
            };
            `,
        ],
        refineProps: [
            "i18nProvider={i18nProvider}",
            "Header={Header}",
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
    extend(answers) {
        if (answers["custom-layout"] !== "no") {
            base._app.import = base._app.import.filter(item => item !== `import { Header } from "@components";`)
        }
        return base;
    },
};
