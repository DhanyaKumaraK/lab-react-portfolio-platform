module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.jsx'],
  testMatch: ['**/__tests__/**/*.test.(js|jsx)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
