module.exports = (options) => {
  return async function gzip(ctx, next) {
    await next();
    console.log('gzip middleware');
  };
};
