module.exports = {
    rules: {
        'use-gatsby-link': require('./rules/use-gatsby-link'),
        'purify-html': require('./rules/purify-html')
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
                'gatsby/purify-html': 'warn'
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