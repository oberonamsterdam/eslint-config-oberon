module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/prefer-nullish-coalescing": 2,
    "@typescript-eslint/prefer-optional-chain": 2,
    "@typescript-eslint/prefer-for-of": 2,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["label"],
      },
    ],
    "react/prop-types": "off",
    "react/jsx-key": [
      2,
      {
        checkFragmentShorthand: true,
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/order": "off",
    "react/destructuring-assignment": "off",
    "react/state-in-constructor": "off",
    "no-alert": "off",
    "react/no-array-index-key": "off",
    "no-underscore-dangle": [
      "error",
      {
        allow: ["__typename"],
      },
    ],
    "no-continue": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "import/extensions": [
      "error",
      "never",
      {
        svg: "always",
      },
    ],
    "no-nested-ternary": "off",
    "import/no-unresolved": "off",
    "prettier/prettier": "warn",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "styled-components",
            message: "Use styled-components/macro instead",
          },
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
