module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaVersion: "esnext",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/no-unused-vars": 1,
        "@typescript-eslint/ban-ts-comment": 0,
        "react/button-has-type": 2,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
