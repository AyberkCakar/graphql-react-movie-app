const  express = require('express');
const  expressGraphql = require('express-graphql');

const schema = require('./schema/schema.js');

const  app = express();

//dotenv
require('dotenv').config()

//db
const  db = require('./helpers/db.js')();

app.use('/graphql', expressGraphql({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
   console.log('server is running...');
});
