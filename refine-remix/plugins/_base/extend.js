const base = {
    _app: {
        isNextAuthCheck: false,
        isAuthProviderCheck: false,
        loader: [],
    },
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

        return base;
    },
};
