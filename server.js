// lessons finished: 27
// https://coursehunters.net/course/udemy-graphql-with-react-complete-guide
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Listening');
});
