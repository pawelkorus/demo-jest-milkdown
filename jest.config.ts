import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  transform: {
    "^.+\\.[t]sx?$": "ts-jest",
    "^.+\\.[j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
  ],
  moduleNameMapper: {
    "^@milkdown/prose/(.*)$": "<rootDir>/node_modules/@milkdown/prose/lib/$1.js",
    "^@milkdown/(.*)$": "<rootDir>/node_modules/@milkdown/$1"
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  injectGlobals: true,
}

export default config
