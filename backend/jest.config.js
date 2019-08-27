module.exports = {
  testEnvironment: 'node',
  roots: ['tests'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  collectCoverage: true
}
