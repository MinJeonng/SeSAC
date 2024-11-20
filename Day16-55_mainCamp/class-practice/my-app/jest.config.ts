// import type { Config } from 'jest';
// import nextJest from 'next/jest.js';

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: './',
// });

// // 1. MSW 설정 전
// // const config: Config = {
// //   coverageProvider: 'v8',
// //   testEnvironment: 'jsdom',
// //   testMatch: ['**/*.test.(js|jsx|ts|tsx)'],
// //   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
// // };

// // 2, MSW 설정 후
// const config: Config = {
//   coverageProvider: 'v8',
//   testEnvironment: 'jest-fixed-jsdom',
//   testMatch: ['**/*.test.(js|jsx|ts|tsx)'],
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
//   // Add more setup options before each test is run
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   testEnvironmentOptions: {
//     customExportConditions: [''],
//   },
// };

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config);

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-fixed-jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
