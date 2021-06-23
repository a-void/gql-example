const { GraphQLObjectType, GraphQLSchema, printSchema } = require('graphql');

const queries = require('./queries');
const mutations = require('./mutations');

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
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...mutations,
    },
  }),
});

console.log(`\n\n--------\n${printSchema(schema)}--------\n\n`);

module.exports = { schema };

