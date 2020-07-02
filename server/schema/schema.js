const graphql = require("graphql");
const _ = require("lodash");
const Player = require("../models/player");
const Team = require("../models/team");
//Grab Properties  from GQL package
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

// dummy data
var players = [
  { name: "Damian Lillard", age: 29, id: "1", teamId: "1" },
  { name: "Luka Doncic", age: 21, id: "2", teamId: "2" },
  { name: "Anthon Davis", age: 27, id: "3", teamId: "3" },
  { name: "Kristaps Porzingis", age: 24, id: "4", teamId: "2" },
  { name: "Lebron James", age: 35, id: "5", teamId: "3" },
  { name: "Carmelo Anthony", age: 36, id: "6", teamId: "1" },
  { name: "Jvale Mcgee", age: 30, id: "7", teamId: "3" },
];

var teams = [
  { name: "Portland Trailblazers", city: "Portland", id: "1" },
  { name: "Dallas Mavericks", city: "Dallas", id: "2" },
  { name: "LA Lakers", city: "Los Angeles", id: "3" },
];

//Define Player Object Type
const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    team: {
      type: TeamType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(teams, { id: parent.teamId });
      },
    },
  }),
});

//Define Team Type

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    players: {
      type: new GraphQLList(PlayerType),
      resolve(parent, args) {
        return _.filter(players, { teamId: parent.id });
      },
    },
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
        //return _.find(players, { id: args.id });
      },
    },
    team: {
      type: TeamType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //return _.find(teams, { id: args.id });
      },
    },
    players: {
      type: GraphQLList(PlayerType),
      resolve(parent, args) {
        //return players;
      },
    },
    teams: {
      type: GraphQLList(TeamType),
      resolve(parent, args) {
        //return teams;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
