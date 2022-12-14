const plugins = [
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true,
    },
  ],
  ["@babel/plugin-proposal-optional-catch-binding"],
  "react-native-reanimated/plugin", // NOTE: this must be last in the plugins
]
const expoConfig = {
  presets: ["babel-preset-expo"],
  env: {
    production: {},
  },
  plugins,
}

const babelConfig = expoConfig

module.exports = babelConfig
