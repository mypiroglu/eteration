module.exports = {
  preset: 'jest-react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|@react-native)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@react-native-community/async-storage':
      '@react-native-community/async-storage/jest/async-storage-mock',
  },
};
