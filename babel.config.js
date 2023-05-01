module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    // '@babel/plugin-proposal-class-properties',
    // '@babel/plugin-proposal-private-methods',
    'react-native-reanimated/plugin',
  ],
  // assumptions: {
  //   setPublicClassFields: false,
  // },
}
