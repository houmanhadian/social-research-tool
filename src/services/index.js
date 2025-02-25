
const instaPosts = require('./insta-posts/insta-posts.service.js');
const instaPostsa = require('./insta-postsa/insta-postsa.service.js');
const instaPostsb = require('./insta-postsb/insta-postsb.service.js');
const instaProfiles = require('./insta-profiles/insta-profiles.service.js');
const instaComments = require('./insta-comments/insta-comments.service.js');
const instaLikes = require('./insta-likes/insta-likes.service.js');
const instaTags = require('./insta-tags/insta-tags.service.js');
const instaLocations = require('./insta-locations/insta-locations.service.js');
const instaFollowers = require('./insta-followers/insta-followers.service.js');
const instaFollowing = require('./insta-following/insta-following.service.js');
const instaFeed = require('./insta-feed/insta-feed.service.js');
const instaSearch = require('./insta-search/insta-search.service.js');
const instaMedia = require('./insta-media/insta-media.service.js');
const users = require('./users/users.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(instaPosts);
  app.configure(instaPostsa);
  app.configure(instaPostsb);
  app.configure(instaProfiles);
  app.configure(instaComments);
  app.configure(instaLikes);
  app.configure(instaTags);
  app.configure(instaLocations);
  app.configure(instaFollowers);
  app.configure(instaFollowing);
  app.configure(instaFeed);
  app.configure(instaSearch);
  app.configure(instaMedia);
  app.configure(users);

};
