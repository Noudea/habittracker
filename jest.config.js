module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve('uuid'),
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.{js,jsx,ts,tsx}',
  ],

  testPathIgnorePatterns: ['/__tests__/mocks/'],
}
