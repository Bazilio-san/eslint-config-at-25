const { FlatCompat } = require('@eslint/eslintrc');

const eslintrc = require('./.eslintrc.js');

// Legacy export (eslintrc-style) for ESLint <= 8 users
module.exports = eslintrc;

// Flat Config export for ESLint 9 users
// Usage in eslint.config.js: import af from 'eslint-config-af-25'; export default af.flat;
const compat = new FlatCompat({ baseDirectory: __dirname });
module.exports.flat = compat.config(eslintrc);
