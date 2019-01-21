import React, { Component } from "react";
import { Grid, Header, Container } from "semantic-ui-react";
import ToggleableTimerForm from "./components/toggleableTimerForm.component";
import EditableTimerList from "./components/editableTimerList.component";

class App extends Component {
  render() {
    return (
      <Grid columns={4} centered>
        <style>{`html, body {background-color: #252839 !important;}}`}</style>

        <Grid.Column color="blue">
          <br />
          <Header as="h3">Timers Dashboard</Header>
          <EditableTimerList />
          <ToggleableTimerForm isOpen={false} />
        </Grid.Column>
        <br />
      </Grid>
    );
  }
}

export default App;
