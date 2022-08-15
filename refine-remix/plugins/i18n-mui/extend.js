const base = {
    _app: {
        import: [`import { appWithTranslation, useTranslation } from "next-i18next";`],
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
        refineProps: ["i18nProvider={i18nProvider}"],
        localImport: [],
    },
};

module.exports = {
    extend(answers) {
        if(answers["mui-custom-layout"] !== "mui-custom-layout") {
            base._app.localImport.push(`import { Header } from "@components/layout"`)
            base._app.refineProps.push("Header={Header}")
        }
        return base;
    },
};
