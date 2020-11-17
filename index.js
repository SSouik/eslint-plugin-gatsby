module.exports = {
    rules: {
        "use-gatsby-link": {
            create: function(context) {
                return {
                    JSXElement(node) {
                        if (node.openingElement.name.name === 'a') {
                            if (node.leadingComments.some(comment => comment.value.trim() === 'eslint-disable-use-gatsby-link')) {
                                return;
                            }

                            context.report(node, 'Use the Gatsby \'<Link/>\' component instead of \'<a/>\'');
                        }
                    }
                };
            }
        }
    }
};