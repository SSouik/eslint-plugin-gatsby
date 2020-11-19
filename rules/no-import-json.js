module.exports = {
    create: function(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value.endsWith('.json')) {
                    context.report(node, 'Do not import json directly, use GraphQL to fetch data')
                }
            }
        };
    }
};