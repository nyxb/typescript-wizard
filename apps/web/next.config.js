const withTM = require('next-transpile-modules')([
  '@nyxb/error-translation-engine',
]);

module.exports = withTM({
  reactStrictMode: true,
});
