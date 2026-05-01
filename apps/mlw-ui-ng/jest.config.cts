module.exports = {
  displayName: 'mlw-ui-ng',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.html',
    '!src/main.ts',
    '!src/index.html',
    '!src/test-setup.ts',
    '!src/app/app.config.ts',
    '!src/**/*.spec.ts',
  ],
  coverageDirectory: '<rootDir>/../../coverage/apps/mlw-ui-ng',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Test Results of app [mlw-ui-ng]',
        outputName: 'junit-mlw-ui-ng.xml',
        outputDirectory: '<rootDir>/../../coverage/apps/mlw-ui-ng',
      },
    ],
  ],
};
