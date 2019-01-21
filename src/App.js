import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ToggleableTimerForm from "./components/toggleableTimerForm.component";
import EditableTimerList from "./components/editableTimerList.component";
const uuid = require("uuidv4");

class App extends Component {
  state = {
    timers: [
      {
        title: "Practice squat",
        project: "Gym chores",
        id: uuid(),
        elapsed: 5456099,
        runningSince: Date.now()
      },
      {
        title: "Bake squash",
        project: "Kitchen chores",
        id: uuid(),
        elapsed: 1273998,
        runningSince: null
      }
    ]
  };
  render() {
    return (
      <Grid columns={4} centered>
        <style>{`html, body {background-color: #252839 !important;}}`}</style>
        <Grid.Column color="blue">
          <Header as="h3">Timers Dashboard</Header>
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm isOpen={false} />
        </Grid.Column>
        <br />
      </Grid>
    );
  }
}

export default App;
