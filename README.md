# eslint-plugin-gatsby

Collection of eslint rules made specifically for Gatsby. This package is meant to be a plugin for eslint within Gatsby projects and is configurable just like other eslint rules and plugins.

## Table of Contents
- [Installation](#installation)
- [How to Use](#how-to-use)
  - [Plugins](#plugins)
  - [Extends](#extends)
  - [Manually](#manually)
- [Rules](./docs/rules.md)
- [Motivation](#motivation)
- [Authors](#authors)

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

### Plugins
To add the plugin into your ESLint config, add the `gatsby` plugin into the plugins array.

##### JSON

```javascript
{
  ...
  "plugins": ["gatsby"]
  ...
  // rest of ESLint config
}
```

##### JavaScript

```javascript
module.exports = {
  ...
  plugins: ['gatsby']
  ...
  // rest of ESLint config
}
```

##### YAML

```yaml
...
plugins:
  - gatsby
...
# rest of ESLint config
```

<br/>
<hr/>
<br/>

### Extends
This library has a default recommended config that your ESLint config can extend. To do so, add the line `'plugin:gatsby/recommended'` to the extends array.

##### JSON

```javascript
{
  ...
  "extends": ["plugin:gatsby/recommended"]
  ...
  // rest of ESLint config
}
```

##### JavaScript

```javascript
module.exports = {
  ...
  extends: ['plugin:gatsby/recommended']
  ...
  // rest of ESLint config
}
```

##### YAML

```yaml
...
extends:
  - 'plugin:gatsby/recommended'
...
# rest of ESLint config
```

<br/>
<hr/>
<br/>

### Manually
In the case that you do not want to extend the recommended rules or you want to override some of the recommended rules, you can manually configure the rules within the object

##### JSON

```javascript
{
  ...
  "rules": {
    "gatsby/use-gatsby-link": "warn" // set use-gastby-link to be an ESLint warning
  }
  ...
  // rest of ESLint config
}
```

##### JavaScript

```javascript
module.exports = {
  ...
  'rules': {
    'gatsby/use-gatsby-link': 'warn' // set use-gastby-link to be an ESLint warning
  }
  ...
  // rest of ESLint config
}
```

##### YAML

```yaml
...
rules: {
  'gatsby/use-gatsby-link': 'warn' # set use-gastby-link to be an ESLint warning
}
...
# rest of ESLint config
```

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