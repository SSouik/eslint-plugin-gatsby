# Rules

## Table of Contents
- [no-import-json](#no-import-json)
- [purify-html](#purify-html)
- [use-gatsby-link](#use-gatsby-link)

<br/>
<hr/>
<br/>

### no-import-json
The rule `no-import-json` enforces that a file does not directly import a `json` file. It instead suggests that any data needed for the file should be fetched using [GraphQL](https://graphql.org/).

Example:

```javascript
import React from 'react';
... // other imports

// This will be flagged by ESLint rule 'gatsby/no-import-json'
import data from 'path/to/data.json';

...
```

Disabling the rule in a file:

```javascript
/* eslint-disable gatsby/no-import-json */

import React from 'react';
... // other imports

// This will NOT be flagged by ESLint rule 'gatsby/no-import-json'
import data from 'path/to/data.json';

...
```

Recommended/Default Configuration: `warn`

<br/>

### purify-html
The rule `purify-html` searches for any usage of `dangerouslySetInnerHTML` and suggests either not using it or to purify the html being injected since it is a [XSS](https://www.veracode.com/security/xss) vulnerablity.

Example:

```javascript
...

const function MyComponent = () => {
    const html = '<p>Hello ESLint</p>';

    // This will be flagged by ESLint rule 'gatsby/purify-html'
    return <div dangerouslySetInnerHTML={{ __html: html }}/>;
}

...
```

Disabling the rule in a file:

```javascript
/* eslint-disable gatsby/purify-html */

...

const function MyComponent = () => {
    const html = '<p>Hello ESLint</p>';

    // This will NOT be flagged by ESLint rule 'gatsby/purify-html'
    return <div dangerouslySetInnerHTML={{ __html: html }}/>;
}

...
```

Recommended/Default Configuration: `warn`

<br/>

### use-gatsby-link
The rule `use-gatsby-link` searches for any usage of the `<a>` and suggests using the Gatsby provided `<Link>` component instead which is optimized for the transitioning to pages within the site.

Example:

```javascript
...

const function MyComponent = () => {
    return (
        <div>
            <p>Some Blogs</p>

            // This will be flagged by ESLint rule 'gatsby/use-gatsby-link'
            <a href='/blogs'>Go to Blogs</a>
        </div>
    )
}

...
```

Disabling the rule in a file:

```javascript
// Option 1
/* eslint-disable gatsby/use-gatsby-link */

...

const function MyComponent = () => {
    return (
        <div>
            <p>Some Blogs</p>
            {
                // Option 2
                // eslint-disable-use-gatsby-link
                <a href='/blogs'>Go to Blogs</a>
            }
        </div>
    )
}

...
```

Recommended/Default Configuration: `error`

<br/>

[&larr; Go Back Home](../README.md)
