import React from "react";
import { Card, Header } from "semantic-ui-react";
import TimerForm from "./timerForm.component";
import Timer from "./timer.component";

class EditableTimer extends React.Component {
  render() {
    if (this.props.editFormOpen) {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Editable Timer</Card.Header>
            <Card.Meta>{`Edit Form Open: ${this.props.editFormOpen}`}</Card.Meta>
            <TimerForm title={this.props.title} project={this.props.project} />
          </Card.Content>
        </Card>
      );
    } else {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Editable Timer</Card.Header>
            <Card.Meta>{`Edit Form Open: ${this.props.editFormOpen}`}</Card.Meta>
            <Timer
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
