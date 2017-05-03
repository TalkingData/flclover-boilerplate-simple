const Flclover = require('flclover');

const app = Flclover({
  baseDir: __dirname,
});
app.proxy = true;
app.listen(process.env.PORT || 7001);
