const flat = require('./eslint.config.js');

// Export flat config as default (ESLint 9)
module.exports = flat;
// Also provide .flat for convenience
module.exports.flat = flat;
