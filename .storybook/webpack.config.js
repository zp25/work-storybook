const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.(scss|sass)$/,
      exclude: /\.module\.(scss|sass)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.module\.(scss|sass)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]_[local]__[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
    },
    // fonts
    {
      test: /\.(ttf|otf|eot|woff2?)$/i,
      use: 'file-loader',
    },
    // lint
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: [
        /node_modules/,
      ],
      use: ['eslint-loader'],
    },
  );

  config.plugins.push(
    new StyleLintPlugin({
      files: ['src/**/*.{scss,css}', 'assets/**/*.{scss,css}'],
    }),
  );

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '..'),
  };

  // Return the altered config
  return config;
};
