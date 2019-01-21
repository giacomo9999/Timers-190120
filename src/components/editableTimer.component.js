import React from "react";
import { Card } from "semantic-ui-react";
import TimerForm from "./timerForm.component";
import Timer from "./timer.component";

class EditableTimer extends React.Component {
  state = { editFormOpen: true };

  handleFormClose = () => {
    console.log("Closing edit form");
    this.setState({ editFormOpen: false });
  };

  handleFormSubmit = data => {
    console.log("Submitting data..." + data.title);
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
            />
          </Card.Content>
        </Card>
      );
    }
  }
}

export default EditableTimer;
