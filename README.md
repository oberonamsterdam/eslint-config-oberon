# Oberon ESLint config

The Oberon javascript code standard & config.

## 3rd party configs

- Includes `eslint:recommended` (see included rules [here](http://eslint.org/docs/rules/))
- Includes `plugin:flowtype/recommended` (see exact rules [here](https://github.com/gajus/eslint-plugin-flowtype/blob/master/src/configs/recommended.json))
- Includes `plugin:react/recommended` (see exact rules [here](https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L113))

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