const path = require('path');

module.exports = {
  process(source, filename, config, options) {
    var text = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')

    return 'module.exports = ' + text + ';';
  },
};