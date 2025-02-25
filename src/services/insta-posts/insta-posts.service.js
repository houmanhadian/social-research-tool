// Initializes the `instaPosts` service on path `/instagram/posts`
const createService = require('feathers-nedb');
const createModel = require('../../models/insta-posts.model');
const hooks = require('./insta-posts.hooks');
//const search = require('../../feathers-nedb-regex-search')
const search = require('../../hooks/hook-feathers-nedb-search')
const aggr = require('../../hooks/hook-feathers-nedb-proc')
const cube = require('../../hooks/hook-feathers-nedb-cube')
module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    whitelist: [ '$regex','$where' ],
    paginate,
    multi:true,
  };

  // Initialize our service with any options it requires
  app.use('/instagram/posts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('instagram/posts');

  service.hooks(hooks);
  service.hooks({
    before: {
      find: search()
    },
    after: {
      find: aggr()
    }
  })
};
