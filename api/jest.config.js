export default {
  testEnvironment: "node",
  verbose: true,
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "json"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};