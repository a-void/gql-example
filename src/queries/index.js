const axios = require('axios').default;
const {
  GraphQLFieldConfig,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
} = require('graphql');


/**
 * Types
 */
const ContinentsType = new GraphQLObjectType({
  name: 'Continents',
  fields: {
    data: { type: new GraphQLList(GraphQLString) },
  },
});

const TimezonesType = new GraphQLObjectType({
  name: 'Timezones',
  fields: {
    data: { type: new GraphQLList(GraphQLString) },
  },
});


/**
 * Queries
 */
const getContinents = {
  type: ContinentsType,
  async resolve(obj, args, ctx, info) {
    const { data } = await axios.post('https://countries.trevorblades.com/', {
      query: `query Continents($filter: ContinentFilterInput = {}) {
        continents(filter: $filter) {
          name
        }
      }`,
    });
    return { data: data.data.continents.map((continent) => continent.name), };
  },
};

const getTimezones = {
  type: TimezonesType,
  async resolve(obj, args, ctx, info) {
    const { data } = await axios.get('http://worldtimeapi.org/api/timezone')
    return { data };
  },
};


module.exports = {
  getContinents,
  getTimezones,
};

