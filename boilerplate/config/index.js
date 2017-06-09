module.exports = {
  middleware: ['gzip'],
};

module.exports.gzip = {};

// logger config
module.exports.flcloverLogger = {
  dir: '/tmp/flcloverdemo',
  appFileName: 'app',
  errorFileName: 'error',
};
