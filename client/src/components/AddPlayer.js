import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTeamsQuery } from "../queries/queries";

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      teamId: "",
    };
  }

  displayTeams() {
    var data = this.props.data;
    console.log(data);
    if (data.loading) {
      return (
        //text
        <option>loading Teams..</option>
      );
    } else {
      return data.teams.map((team) => {
        return (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form id="add-player" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Player Full name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Age:</label>
          <input
            type="number"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Team:</label>
          <select onChange={(e) => this.setState({ teamId: e.target.value })}>
            <option>Select Team</option>
            {this.displayTeams()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}
export default graphql(getTeamsQuery)(AddPlayer);
