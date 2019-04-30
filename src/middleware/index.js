const mwViewsRender = require('./mw-views-render');
const mwEtlApi = require('./mw-etl-api');
const mwInstaAuth = require('./mw-insta-auth');
const mwFindCrossfilter = require('./mw-find-crossfilter');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  //const ejs = require('ejs');
  var path = require('path');
  const expressLayouts = require('express-ejs-layouts')
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../../src/views'));

  app.use('/home',expressLayouts);
  app.use(mwInstaAuth());
  app.use(mwFindCrossfilter());
  app.use(mwViewsRender());

  app.use(mwEtlApi());


};
