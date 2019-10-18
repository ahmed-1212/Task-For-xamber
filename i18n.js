

const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  all: {
    en: 'en',
    ar: 'ar',
  },
}

module.exports = new NextI18Next({
  otherLanguages: ['ar'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
})
