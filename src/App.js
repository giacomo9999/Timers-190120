// parent: App.js

import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ToggleableTimerForm from "./components/toggleableTimerForm.component";
import EditableTimerList from "./components/editableTimerList.component";
import NewTimer from "./components/newTimer.component";
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

  // passed down as prop onFormSubmit to ToggleableTimerForm
  handleCreateFormSubmit = timer => {
    console.log("App creating new timer...");
    this.createTimer(timer);
    console.log(this.state);
  };

  // called by handleCreateFormSubmit
  createTimer = timer => {
    const t = NewTimer(timer);
    this.setState({ timers: this.state.timers.concat(t) });
  };

  // passed down as prop onFormSubmit to EditableTimerList
  handleEditFormSubmit = attrs => {
    this.updateTimer(attrs);
  };

  updateTimer = attrs => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project
          });
        } else {
          return timer;
        }
      })
    });
  };

  handleTrashClick = timerId => {
    this.deleteTimer(timerId);
  };

  deleteTimer = timerId => {
    const adjTimers = this.state.timers.filter(timer => timer.id !== timerId);
    this.setState({ timers: adjTimers });
  };

  render() {
    return (
      <Grid columns={4} centered>
        <style>{`html, body {background-color: #252839 !important;}}`}</style>
        <Grid.Column color="blue">
          <Header as="h3">Timers Dashboard</Header>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
        </Grid.Column>
        <br />
      </Grid>
    );
  }
}

export default App;
