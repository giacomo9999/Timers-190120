import React from "react";
import { Card, Header } from "semantic-ui-react";
import EditableTimer from "./editableTimer.component";

class EditableTimerList extends React.Component {
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Header as="h5">Editable Timer List</Header>

          <EditableTimer
            title="Learn React"
            project="Web Domination"
            elapsed="8986300"
            runningSince={null}
            editFormOpen={false}
          />
          <EditableTimer
            title="Learn extreme ironing"
            project="World Domination"
            elapsed="3890985"
            runningSince={null}
            editFormOpen={true}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default EditableTimerList;
