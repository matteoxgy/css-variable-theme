module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
