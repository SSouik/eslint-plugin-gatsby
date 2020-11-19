module.exports = {
    rules: {
        'use-gatsby-link': require('./rules/use-gatsby-link'),
        'purify-html': require('./rules/purify-html'),
        'no-import-json': require('./rules/no-import-json')
    },
    configs: {
        recommended: {
            plugins: [
                'react',
                'gatsby'
            ],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                'gatsby/use-gatsby-link': 'error',
                'gatsby/purify-html': 'warn',
                'gatsby/no-import-json': 'warn'
            }
        },
        all: {
            plugins: [
                'react',
                'gatsby'
            ],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }
};