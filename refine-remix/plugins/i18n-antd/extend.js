const base = {
    _app: {
        import: [
            `import { appWithTranslation, useTranslation } from "next-i18next";`,
        ],
        localImport: [`import { Header } from "~/components/layout";`],
        innerHooks: [`const { t, i18n } = useTranslation();`],
        inner: [
            `
            const i18nProvider = {
                translate: (key: string, params: object) => t(key, params),
                changeLocale: (lang: string) => i18n.changeLanguage(lang),
                getLocale: () => i18n.language,
            };
            `,
        ],
        refineProps: ["i18nProvider={i18nProvider}", "Header={Header}"],
    },
};

module.exports = {
    extend(answers) {
        if (answers["antd-custom-layout"] !== "no") {
            base._app.localImport = base._app.localImport.filter(
                (item) =>
                    item !== `import { Header } from "~/components/layout";`,
            );
        }
        return base;
    },
};
