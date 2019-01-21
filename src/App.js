import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ToggleableTimerForm from "./components/toggleableTimerForm.component";
import EditableTimerList from "./components/editableTimerList.component";

class App extends Component {
  render() {
    return (
      <Grid columns={4} centered>
        <style>{`html, body {background-color: #252839 !important;}}`}</style>

        <Grid.Column color="olive">
          <br />
          <Header as="h3">Timers Dashboard</Header>
          <EditableTimerList />
          <ToggleableTimerForm isOpen={true} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
