module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // If your TypeScript files are in a specific directory, you can specify the path(s) here
  roots: ['<rootDir>/src'],
  // Transform settings tell Jest how to process different file types
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
