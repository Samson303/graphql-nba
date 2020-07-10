import { gql } from "apollo-boost";

const getPlayersQuery = gql`
  {
    players {
      name
      age
      id
    }
  }
`;

const getTeamsQuery = gql`
  {
    teams {
      name
      id
    }
  }
`;

export { getPlayersQuery, getTeamsQuery };
