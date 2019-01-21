import React from "react";
import { Card, Header } from "semantic-ui-react";

class EditableTimerList extends React.Component {
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Header as="h5">Editable Timer List</Header>
        </Card.Content>
      </Card>
    );
  }
}

export default EditableTimerList;
