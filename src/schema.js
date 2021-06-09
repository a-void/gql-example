const { GraphQLObjectType, GraphQLSchema, printSchema } = require('graphql');

const queries = require('./queries');

/**
 * GraphQL Schema
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...queries,
    },
  }),
});

console.log(`\n\n--------\n${printSchema(schema)}--------\n\n`);

module.exports = { schema };

