process.env.VUE_APP_VERSION = require("./package.json").version;
module.exports = {
    transpileDependencies: ["vuetify"],
    devServer: { proxy: "http://localhost/api", port: 3001 },
};
