const NextFederationPlugin = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true, layers: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'adminapp',
        filename: 'static/chunks/remoteEntry.js',
        exposes:{
          './admin': "./pages/admin.js",
          './pages-map': './pages-map.js',
        }
      })
    );
    return config
  }
}

module.exports = nextConfig
