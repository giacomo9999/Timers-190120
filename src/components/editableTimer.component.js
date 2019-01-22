// Parent: EditableTimerList

import React from "react";
import { Card } from "semantic-ui-react";
import TimerForm from "./timerForm.component";
import Timer from "./timer.component";

class EditableTimer extends React.Component {
  state = { editFormOpen: true };

  // invoked from 'Cancel' button in TimerForm
  handleFormClose = () => {
    console.log("Closing edit form");
    this.closeForm();
  };

  // onFormSubmit: from App, to EditableTimerList, to TimerForm - invoked from 'Submit' Button
  handleFormSubmit = timer => {
    console.log("Submitting data from EditableTimer..." + timer.title);
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  // passed down to Timer
  handleEditClick = () => {
    console.log("Opening edit form");
    this.openForm();
  };

  // invoked from handleFormClose and handleFormSubmit
  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  // invoked from handleEditClick
  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Editable Timer</Card.Header>
            <Card.Meta>{`Edit Form Open: ${
              this.state.editFormOpen
            }`}</Card.Meta>
            <TimerForm
              id={this.props.id}
              title={this.props.title}
              project={this.props.project}
              onFormSubmit={this.handleFormSubmit}
              onFormClose={this.handleFormClose}
            />
          </Card.Content>
        </Card>
      );
    } else {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Editable Timer</Card.Header>
            <Card.Meta>{`Edit Form Open: ${
              this.state.editFormOpen
            }`}</Card.Meta>
            <Timer
              id={this.props.id}
              title={this.props.title}
              project={this.props.project}
              elapsed={this.props.elapsed}
              runningSince={this.props.runningSince}
              onEditClick={this.handleEditClick}
            />
          </Card.Content>
        </Card>
      );
    }
  }
}

export default EditableTimer;
