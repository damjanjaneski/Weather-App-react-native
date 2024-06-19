const path = require("path");

module.exports = {
  entry: "./index.web.tsx",
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: false,
      vm: false,
    },
    extensions: [".web.js", ".web.ts", ".web.tsx", ".js", ".ts", ".tsx"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(tsx?|jsx?)$/,
        loader: "babel-loader",
        exclude:
          /node_modules\/(?!(expo-router|react-native-safe-area-context|@expo))/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: [
            ["@babel/plugin-transform-runtime", { regenerator: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-proposal-private-methods", { loose: true }],
            [
              "@babel/plugin-proposal-private-property-in-object",
              { loose: true },
            ],
          ],
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
