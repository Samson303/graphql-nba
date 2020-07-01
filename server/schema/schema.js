const graphql = require("graphql");
const _ = require("lodash");
//Grab Properties  from GQL package
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

// dummy data
var players = [
  { name: "Damian Lillard", age: 29, id: "1" },
  { name: "Luka Doncic", age: 21, id: "2" },
  { name: "Anthon Davis", age: 27, id: "3" },
];

var teams = [
  { name: "Portland Trailblazers", city: "Portland", id: "1" },
  { name: "Dallas Mavericks", city: "Dallas", id: "2" },
  { name: "LA Lakers", city: "Los Angeles", id: "3" },
];

//Define First Object Type
const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    city: { type: GraphQLString },
  }),
});

// Define RootQuery which is how we initailliy jump into the graph
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    player: {
      type: PlayerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/ other source
        //loadash looks through the array to find any team that has the matching id
        return _.find(players, { id: args.id });
      },
    },
    team: {
      type: TeamType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(teams, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
