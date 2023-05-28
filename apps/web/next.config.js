const withTM = require('next-transpile-modules')([
   '@nyxb/error-translation-engine',
])

module.exports = withTM({
   reactStrictMode: true,
   i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en',
   },
})
