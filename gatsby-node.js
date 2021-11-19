/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = async ({ actions, node }) => {
    actions.createNodeField({
        node,
        name: 'exampleField',
        value: 'foobar',
    })
}
