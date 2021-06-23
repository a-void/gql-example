const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLScalarType,
} = require('graphql');

/**
 * Types
 */
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    addressCity: { type: GraphQLString },
    status: { type: GraphQLString },
  },
});

const VoidType = new GraphQLScalarType({
  name: 'Void',
  serialize() { return null; },
  parseValue() { return null; },
  parseLiteral() { return null; },
});

module.exports = {
  UserType,
  VoidType,
};
