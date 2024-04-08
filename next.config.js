const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 注意：不要直接修改 config 对象，而是返回一个新的对象
    // 例如，添加一个别名（alias）
    config.resolve.alias["components"] = path.join(__dirname, "components");

    // 或者添加一个新的插件
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    // 你可以根据环境或者其他条件来定制 webpack 配置
    if (dev) {
      // 开发模式下的特定配置
    }

    if (isServer) {
      // 服务端打包的特定配置
    }

    // 返回修改后的配置对象
    return config;
  },
};

module.exports = nextConfig;
