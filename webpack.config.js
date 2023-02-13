import TerserPlugin from 'terser-webpack-plugin';
import ShebangPlugin from 'webpack-shebang-plugin';

export default {
  mode: "production",
  target: "node",
  entry: "./src/cli.js",
  output: {
    filename: "legal-notice.cjs",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new ShebangPlugin()
  ],
  experiments: {
    topLevelAwait: true
  }
};
