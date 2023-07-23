module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // Add your custom rule here to remove unused imports
    // but ignore the `/** @jsx jsx */` comment.
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "jsx",
        argsIgnorePattern: "jsx",
        ignorePattern: "jsx"
      }
    ]
  }
};
