module.exports = {
    create: function(context) {
        return {
            JSXElement(node) {
                // Search for all <a> tags
                if (node.openingElement.name.name === 'a') {
                    // Check if the <a> tag is marked as an exception
                    if (node.leadingComments && node.leadingComments.some(comment => comment.value.trim() === 'eslint-disable-use-gatsby-link')) {
                        return;
                    }

                    context.report(node, 'Use the Gatsby \'<Link/>\' component instead of \'<a/>\'');
                }
            }
        };
    }
};