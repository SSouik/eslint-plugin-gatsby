# eslint-plugin-gatsby

Collection of eslint rules made specifically for Gatsby. This package is meant to be a plugin for eslint within Gatsby projects and is configurable just like other eslint rules and plugins.

## Table of Contents
- [Installation](#Installation)
- [How to Use](#How-to-Use)
    - [JSON](#JSON)
    - [JavaScript](#JavaScript)
    - [YAML](#YAML)
- [Motivation](#Motivation)
- [Authors](#Authors)

<br/>
<hr/>
<br/>

## Installation

```bash
# Using npm
npm install --dev eslint-plugin-gatsby

# Using yarn
yarn add --dev eslint-plugin-gatsby
```

<br/>

## How to Use

### JSON

Sample File: `.eslintrc` or `.eslintrc.json`

```json
{
  "env": { },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 11,
    "sourceType": "module",
  },
  "parser": "babel-eslint",
  "plugins": ["react", "gatsby"],
  "rules": {
    "gatsby/use-gatsby-link": "error"
  }
}
```

> This is a minimal sample version of an eslint config file. What's important to note is the `gatsby` plugin in the `plugins` array and the use of a specific rule `gatsby/use-gatsby-link` under the `rules` object

<br/>

### JavaScript
Sample File: `.eslintrc.js`

```javascript
module.exports = {
  env: { ... },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'gatsby'], // include gatsby plugin
  rules: {
    ...
    'gatsby/use-gatsby-link': 'error' // select eslint rules for gatsby
  }
}
```

> This is a minimal sample version of an eslint config file. What's important to note is the `gatsby` plugin in the `plugins` array and the use of a specific rule `gatsby/use-gatsby-link` under the `rules` object

<br/>

### YAML
Sample File: `.eslintrc.yml`

```yml
env:
  browser: true
  es2020: true
  node: true
  jest: true
extends:
  - 'eslint:recommended'
parserOptions:
  ecmaFeatures:
    jsx: true
  ecmaVersion: 11
  sourceType: module
parser: 'babel-eslint'
plugins:
  - react
  - gatsby # include gatsby plugin
rules: {
  ...
  'gatsby/use-gatsby-link': 'error' # select eslint rules for gatsby
}
```

> This is a minimal sample version of an eslint config file. What's important to note is the `gatsby` plugin in the `plugins` array and the use of a specific rule `gatsby/use-gatsby-link` under the `rules` object

<br/>
<hr/>
<br/>

## Motivation
I believe node projects should enforce code standards to hold developers to a certain set of rules that assist with keeping code consistent, safe, and structured well. I have worked on projects that used [Gatsby](https://www.gatsbyjs.com/) and noticed a lack of eslint rules specific to gatsby conventions. Hence why this package was created. I wanted to be able to enforce the use of specific Gatsby conventions and components in code so that the code base is optimized best for the Gatsby framework.

<br/>

## Authors
- Samuel Souik
  - [GitHub](https://github.com/SSouik)
  - [npm](https://www.npmjs.com/settings/ssouik/packages)