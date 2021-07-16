const base = {
    _app: {
        import: [
            `import { useTranslation } from "react-i18next";`,
            `import { Header } from "components";`,
        ],
        inner: [
            "",
            `const { t, i18n } = useTranslation();`,
            "",
            `const i18nProvider = {
                translate: (key: string, params: object) => t(key, params),
                changeLocale: (lang: string) => i18n.changeLanguage(lang),
                getLocale: () => i18n.language,
            };`,
            "",
        ],
        refineProps: ["i18nProvider={i18nProvider}", "Header={Header}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
