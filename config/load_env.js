module.exports = {
  port: process.env.PORT,

  mongoUriPro: process.env.MONGO_URI_PRO,

  mongoUriDev: process.env.MONGO_URI_DEV,

  keyOrSecretPro: process.env.SECRET_OR_KEY_DEV,

  keyOrSecretDev: process.env.SECRET_OR_KEY_PRO
};
