// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',  // Use babel-jest to handle JS/JSX and TS/TSX
    },
    moduleNameMapper: {
      '^components/(.*)$': '<rootDir>/src/components/$1',
      '^styles/(.*)$': '<rootDir>/src/styles/$1',
      '^context/(.*)$': '<rootDir>/src/context/$1',
      '^services/(.*)$': '<rootDir>/src/services/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!(axios)/)'], // Transform axios if using ESM
  };
  