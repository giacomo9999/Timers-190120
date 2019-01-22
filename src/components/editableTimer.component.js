// Parent: EditableTimerList

import React from "react";
import { Card } from "semantic-ui-react";
import TimerForm from "./timerForm.component";
import Timer from "./timer.component";

class EditableTimer extends React.Component {
  state = { editFormOpen: true };

  handleFormClose = () => {
    // invoked from 'Cancel' button in TimerForm
    console.log("Closing edit form");
    this.setState({ editFormOpen: false });
  };

  handleFormSubmit = timer => {
    console.log("Submitting data from EditableTimer..." + timer.title);
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  handleEditClick = () => {
    // invoked by clicking "Edit" icon
    console.log("Opening edit form");
    this.openForm();
  };

  // handleSubmit = timer => {
  //   this.props.onFormSubmit(timer);
  //   this.closeForm();
  // };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    // invoked from handleEditClick
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
