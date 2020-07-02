const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

//connect to mongoDb database

mongoose.connect(
  "mongodb+srv://samson:eS$49D-7yES.SWE@gql-nba.zhm4e.mongodb.net/gql-nba?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
mongoose.connection.once("open", () => {
  console.log("connected to DB");
});
// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
