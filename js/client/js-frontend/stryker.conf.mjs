/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
export default {
  mutate: [
    'src/**/*.js',
    'src/**/*.jsx',
    '!src/**/*.test.js',
    '!src/**/*.test.jsx',
    '!src/**/__tests__/**/*.js',
    '!src/**/__tests__/**/*.jsx'
  ],
  testRunner: 'jest',
  jest: {
    projectType: 'custom',
    configFile: 'jest.config.cjs',
    enableFindRelatedTests: true
  },
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off',
  tempDirName: 'stryker-tmp',
  maxConcurrentTestRunners: 2
};
