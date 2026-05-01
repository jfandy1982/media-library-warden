module.exports = {
  displayName: 'mlw-api',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverageFrom: ['src/**/*.ts', '!src/main.ts', '!src/app/app.module.ts', '!src/**/*.spec.ts'],
  coverageDirectory: '<rootDir>/../../coverage/apps/mlw-api',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Test Results of app [mlw-api]',
        outputName: 'junit-mlw-api.xml',
        outputDirectory: '<rootDir>/../../coverage/apps/mlw-api',
      },
    ],
  ],
};
