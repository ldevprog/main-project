module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
    ],
    parserOptions: {
        ecmaVersion: "esnext",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": 1,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-var-requires": 0,
        "react/react-in-jsx-scope": 0,
        "react/button-has-type": 2,
        "react/display-name": 0,
        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 2,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: ["react", "react-hooks", "i18next"],
    overrides: [
        {
            files: ["**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": 0,
            },
        },
    ],
};
