const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { schema } = require('./schema');
const PORT = 3000;
const app = express();

app.use('/api', graphqlHTTP({
  schema,
  graphiql: false,
}));

app.listen(PORT, () => {
  console.log(`Running a GQL Server at http://localhost:${PORT}`);
});

