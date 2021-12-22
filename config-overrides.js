const jestConfig = require('./jest.config');
const { override, addBabelPlugin } = require('customize-cra');

module.exports = {
  jest: setupJest,
  webpack: setupWebpack,
};

function setupWebpack(config) {
  const setup = override(setupPathAlias())

  return setup(config)
}

function setupPathAlias() {
  return addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
      rootPathPrefix: '@/',
    },
  ])
}

function setupJest(config) {
  return {
    ...config,
    preset : jestConfig.preset,
    reporters : jestConfig.reporters,
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^~/(.*)$': '<rootDir>/$1',
      '^__fixtures__(.*)$': '<rootDir>/__fixtures__$1',
      '^__test__(.*)$': '<rootDir>/__test__$1',
    }
  };
}
