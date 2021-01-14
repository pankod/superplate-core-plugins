const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(paths),
  globals: {
    'ts-jest': {
      isolatedModules: false
    }
  }
};