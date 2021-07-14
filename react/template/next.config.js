const withPlugins = require('next-compose-plugins');

<%_ if (answers.features.includes('bundle-analyzer')) { _%>
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
    })
<%_ } _%>

<%_ if (answers.i18n === 'next-translate') { _%>
    const nextTranslate = require('next-translate');
<%_ } _%>

<%_ if (answers.i18n === 'next-i18next') { _%>
    const { nextI18NextRewrites } = require('next-i18next/rewrites');

    const localeSubpaths = {
        tr: 'tr',
        en: 'en'
    }
<%_ } _%>

const config = {
<%_ if (answers.features.includes('reverse-proxy')) { _%>
    devServer: {
        proxy: {
        '/api': 'http://localhost:3000'
        }
    }, 
<%_ } _%>
<%_ if (answers.i18n === 'next-i18next') { _%>
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
<%_ } _%>
};

module.exports = withPlugins(
    [
        <%_ if (answers.features.includes("bundle-analyzer")) { _%>
            [withBundleAnalyzer],
        <%_ } _%>

        <%_ if (answers.i18n === 'next-translate') { _%>
            [nextTranslate],
        <%_ } _%>
    ],
    config,
);
