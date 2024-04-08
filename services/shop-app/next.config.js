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
        name: 'shopapp',
        filename: 'static/chunks/remoteEntry.js',
        exposes:{
          './shop': "./pages/shop.js",
          './pages-map': './pages-map.js',
          './pdp': './pages/p/[...slug].js',
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
