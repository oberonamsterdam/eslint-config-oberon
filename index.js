module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "plugins": [
        "react",
        "jest",
        "flowtype"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:flowtype/recommended",
        "plugin:jest/recommended"
    ],
    "rules": {
        "semi": ["warn", "always"],
        "react/prop-types": "off",
        "quotes": ["warn", "single"],
        "jsx-quotes": ["warn", "prefer-double"],
        "no-console": "warn",
        "no-debugger": "warn"
    },
    "globals": {
        "module": false,
        "Generator": true
    }
};