const base = {
    _app: {
        isNextAuthCheck: false,
        isAuthProviderCheck: false,
        loader: [],
    },
    selectedTheme: "Blue",
    selectedTitle: undefined,
    selectedSvg: undefined,
};

module.exports = {
    extend(answers) {
        const dataProvider = answers["data-provider"];
        const authProvider = answers["auth-provider"];


        // ## isNextAuthCheck
        if (authProvider === "auth-provider-auth0") {
            base._app.isNextAuthCheck = true;
        }
        // ## isNextAuthCheck


        // ## isAuthProviderCheck
        if (
            authProvider === 'auth-provider-custom' ||
            dataProvider === 'data-provider-supabase' ||
            dataProvider === 'data-provider-strapi-v4' ||
            dataProvider === 'data-provider-appwrite'
        ) {
            base._app.isAuthProviderCheck = true;
        }
        // ## isAuthProviderCheck

        // ## selected theme
        const themeFromAnswers = answers["theme"];
        if (themeFromAnswers) {
            base.selectedTheme = themeFromAnswers;
        }
        // ## selected title
        const titleFromAnswers = answers["title"];
        if (titleFromAnswers) {
            base.selectedTitle = titleFromAnswers;
        }
        // ## selected svg
        const svgFromAnswers = answers["svg"];
        if (svgFromAnswers) {
            base.selectedSvg = svgFromAnswers;
        }

        return base;
    },
};
