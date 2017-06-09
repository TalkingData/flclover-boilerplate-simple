module.exports = {
  middleware: ['gzip'],
};

module.exports.gzip = {};

// logger config
module.exports.flcloverLogger = {
  dir: '/tmp/{{name}}',
  appFileName: 'app',
  errorFileName: 'error',
};
