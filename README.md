# Oberon ESLint config & standard

The Oberon javascript code standard & config.

## Codestyle

### The gist
The config consists of _93 rules_, we'll summarize them here, but for the full set, see below.

- **Semicolons at the end of each statement.**
- **camelCasing should be used on all object properties.**
- **Always use [curly brace conventions](https://eslint.org/docs/rules/curly).** Even if your block only consists of a single statement.
- **Single quotes are the default.** But use double quotes within JSX.
- **Indents with 4 spaces**, no tabs allowed.
- **Always use === for comparing equality**
- **Don't use var**, use const/let instead.
- **Don't declare multiple variables on a single line.** Except for uninitialized variables.
This is **allowed**:
```js
const a, b, c;
```
This **isn't:**
```js
const a = false, b = true, c = false;
```
- **Console/debugger calls will be marked as warnings.** They should not be added to production code.

### Full set
- Read the set of rules here [here](https://github.com/oberonamsterdam/eslint-config-oberon/blob/master/index.js#L20)
- Includes `eslint:recommended` (see included rules [here](http://eslint.org/docs/rules/))
- Includes `plugin:flowtype/recommended` (see exact rules [here](https://github.com/gajus/eslint-plugin-flowtype/blob/master/src/configs/recommended.json))
- Includes `plugin:react/recommended` (see exact rules [here](https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L113))
- Includes `plugin:jest/recommended` (see exact rules [here](https://www.npmjs.com/package/eslint-plugin-jest#recommended))  
This doesn't mean you're required to have unit tests, it just validates them correctly if they're present


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

Install eslint & eslint-config-oberon locally (`npm i eslint eslint-config-oberon`)

## Commit hook (recommended)

- `npm i lint-staged husky`
- Add the following to your `package.json`:
```json
    "husky": {
        "hooks": {
            "pre-commit": "npm run typecheck && lint-staged"
        }
    }
```
