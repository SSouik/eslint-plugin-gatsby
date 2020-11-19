module.exports = {
    create: function(context) {
        return {
            JSXIdentifier(node) {
                if (node.name === 'dangerouslySetInnerHTML') {
                    context.report(node, 'Avoid using dangerouslySetInnerHTML or purify the html before injecting')
                }
            }
        };
    }
};