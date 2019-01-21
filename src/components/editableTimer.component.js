import React from "react";
import { Card, Header } from "semantic-ui-react";
import TimerForm from "./timerForm.component";

class EditableTimer extends React.Component {
  render() {
    // if (this.props.open)
      return (
        <Card fluid>
          <Card.Content>
            <Header as="h5">Editable Timer</Header>
          </Card.Content>
        </Card>
      );
  }
}

export default EditableTimer;
