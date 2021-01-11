const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/ui/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ui',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button',
        './Hero': './src/components/Hero',
        './Input': './src/components/Input',
        './Product': './src/components/Product',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
