module.exports = {
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  // Optional: if you have issues with node_modules
  // transformIgnorePatterns: [
  //   "/node_modules/(?!(YOUR_ESM_MODULE_HERE)/)"
  // ],
};