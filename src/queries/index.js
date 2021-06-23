const axios = require('axios').default;
const { GraphQLString } = require('graphql');
const { UserType } = require('../types')



/**
 * Queries
 */
const user = {
  type: UserType,
  args: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    google_id: { type: GraphQLString },
  },
  async resolve(obj, args, ctx, info) {
    const query = Object.keys(args).reduce((acc, key) => acc.concat(`${key}=${args[key]}`), '');
    const { data } = await axios.get(`http://localhost:3000/users?${query}`);
    return data;
  },
};


module.exports = {
  user,
};


/**
 * EXAMPLE QUERIES:
 *
 * get user by email:
 * curl -d '{"query":"query User($email: String) { user(email: $email) { id email } }","variables":{"email":"email@email.com"}}' -H "Content-Type: application/json" -X POST http://localhost:3001/api
 *
 * get user by id:
 * curl -d '{"query":"query User($id: String) { user(id: $id) { id email } }","variables":{"id":"1"}}' -H "Content-Type: application/json" -X POST http://localhost:3001/api

 * get user by google_id:
 * curl -d '{"query":"query User($google_id: String) { user(google_id: $google_id) { id email } }","variables":{"google_id":"asd"}}' -H "Content-Type: application/json" -X POST http://localhost:3001/api
 */
