module.exports = {
  displayName: 'mlw-api-e2e',
  preset: '../../jest.preset.js',
  globalSetup: '<rootDir>/src/support/global-setup.ts',
  globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverageFrom: [],
  coverageDirectory: '<rootDir>/../../coverage/apps/mlw-api-e2e',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Test Results of app [mlw-api-e2e]',
        outputName: 'junit-mlw-api-e2e.xml',
        outputDirectory: '<rootDir>/../../coverage/apps/mlw-api-e2e',
      },
    ],
  ],
};
