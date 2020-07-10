import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getPlayersQuery } from "../queries/queries";
// function PlayerList() {
//   return (
//     <div>
//       <ul id="player-list">
//         <li>Player Name</li>
//       </ul>
//     </div>
//   );
// }

class PlayerList extends Component {
  displayPlayers() {
    var data = this.props.data;

    if (data.loading) {
      return <div>Loding Players</div>;
    } else {
      console.log(data.players);
      return data.players.map((player) => {
        return <li key={player.id}> {player.name} </li>;
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="player-list">{this.displayPlayers()}</ul>
      </div>
    );
  }
}
export default graphql(getPlayersQuery)(PlayerList);
