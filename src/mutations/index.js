const axios = require('axios').default;
const {
  GraphQLFieldConfig,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');
const { UserType, VoidType } = require('../types')


const UserCreateInputType = new GraphQLInputObjectType({
  name: 'UserCreateInput',
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: GraphQLString },
  }
});


/**
 * Mutations
 */
const userCreate = {
  type: UserType,
  args: {
    input: { type: UserCreateInputType },
  },
  async resolve(obj, args, ctx, info) {
    const { data } = await axios.post(`http://localhost:3000/users`, args.input);
    return data;
  },
};

const userUpdate = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    input: { type: UserCreateInputType },
  },
  async resolve(obj, args, ctx, info) {
    const { data } = await axios.patch(`http://localhost:3000/users/${args.id}`, args.input);
    return data;
  },
};

const userDelete = {
  type: VoidType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(obj, args, ctx, info) {
    const { data } = await axios.delete(`http://localhost:3000/users/${args.id}`);
    return data;
  },
};


module.exports = {
  userCreate,
  userUpdate,
  userDelete,
};


/**
 * EXAMPLE MUTATIONS:
 *
 * create user
 * curl -d '{"query":"mutation UserCreate($input: UserCreateInput) { userCreate(input: $input) { id email status } }","variables":{"input":{"email":"email@email.com","status":"create"}}}' -H "Content-Type: application/json" -X POST http://localhost:3001/api
 *
 * update user
 * curl -d '{"query":"mutation UserUpdate($id: String!, $input: UserCreateInput) { userUpdate(id: $id, input: $input) { id email status } }","variables":{"id":"129","input":{"email":"newtest@test.com","status":"update"}}}' -H "Content-Type: application/json" -X POST http://localhost:3001/api
 *
 * delete user
 * curl -d '{"query":"mutation UserDelete($id: String!) { userDelete(id: $id) }","variables":{"id":"72"}}' -H "Content-Type: application/json" -X POST http://localhost:3001/api
 */
