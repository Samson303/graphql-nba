import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
//components
import PlayerList from "./components/PlayerList";
import AddPlayer from "./components/AddPlayer";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> Samsons NBA Playes List</h1>
        <PlayerList />
        <AddPlayer />
      </div>
    </ApolloProvider>
  );
}

export default App;
