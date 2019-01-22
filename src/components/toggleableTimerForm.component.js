// parent: App.js

import React from "react";
import { Grid, Button } from "semantic-ui-react";
import TimerForm from "./timerForm.component";

class ToggleableTimerForm extends React.Component {
  state = { editFormOpen: false };

  handleFormOpen = () => {
    this.setState({ editFormOpen: true });
  };

  handleFormClose = () => {
    console.log("Closing edit form");
    this.setState({ editFormOpen: false });
  };

  handleFormSubmit = timer => {
    console.log("Submitting data from TTF..." + timer.title);
    this.props.onFormSubmit(timer);
    this.setState({ editFormOpen: false });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Grid>
          <Grid.Row centered>
            <Button size="medium" onClick={this.handleFormOpen}>
              Toggleable Timer Form
            </Button>
          </Grid.Row>
        </Grid>
      );
    }
  }
}

export default ToggleableTimerForm;
