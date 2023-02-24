module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	rules: {
		semi: ["error", "tab"],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
