# Oberon ESLint config

The Oberon javascript code standard & config.


## Usage
Add a `.eslintrc` file to your project:  


```json
{
    "extends": "oberon"
}
```

OR add the following to your project's `package.json`

```json
{
    ...
    "eslintConfig": {
        "extends": "oberon"
    }
}
```

Install eslint & eslint-config-oberon locally (`yarn add eslint eslint-config-oberon`)
  
## Babel
It is assumed you have all babel packages, `babel-eslint` & `babel-preset-reactapp` (or `babel-preset-react-native`) installed,  
and configured from `.babelrc` or the babel property in `package.json`  

## 3rd party configs

- Includes `eslint:recommended` (see included rules [here](http://eslint.org/docs/rules/))
- Includes `plugin:flowtype/recommended` (see exact rules [here](https://github.com/gajus/eslint-plugin-flowtype/blob/master/src/configs/recommended.json))
- Includes `plugin:react/recommended` (see exact rules [here](https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L113))
- Includes `plugin:jest/recommended` (see exact rules [here](https://www.npmjs.com/package/eslint-plugin-jest#recommended))  
This doesn't mean you're required to have unit tests, it just validates them correctly if they're present

## Custom rules

- `semi`: warn  
Semicolons are required per Oberon code style.

- `react/prop-types`: off  
We use flowtype for proptypes, so no need for propType validation.

- `quotes`: single  
We use single quotes wherever possible per Oberon code style.

- `jsx-quotes`: prefer-double    
We however, use double quotes for JSX props.

- `no-console`: warn  
console calls should never be included in production code, but your code should be able to compile if you're attempting to debug something,  
So we've overridden this setting from `eslint/recommended` and set it to warn.

- `no-debugger`: warn  
debugger statements should never be included in production code, but your code should be able to compile if you're attempting to debug something,  
So we've overridden this setting from `eslint/recommended` and set it to warn.

- `indent`: error (when indenting isn't being done with 4 spaces.)  
`case` statement inside a `switch` should be indented by 1 indentation.