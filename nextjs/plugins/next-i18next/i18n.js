const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')
 
module.exports = new NextI18Next({
  otherLanguages: ['en', 'tr'],
  defaultLanguage: 'en',
  localeSubpaths,
  localePath: path.resolve('./public/locales')
})