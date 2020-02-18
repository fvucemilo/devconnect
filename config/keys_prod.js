const loadEnv = require('./load_env');

module.exports = {
  mongoURI: loadEnv.mongoUriPro,
  secretOrKey: loadEnv.keyOrSecretPro
};
