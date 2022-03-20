module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          graphql: "./graphql",
          assets: "./assets",
          "~": "./src/",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
