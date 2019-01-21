import React from "react";
import { Card, Header } from "semantic-ui-react";
import EditableTimer from "./editableTimer.component";

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map(timer => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
      />
    ));
    return (
      <Card fluid>
        <Card.Content>
          <Header>Editable Timer List</Header>
          <div id="timers">{timers}</div>
        </Card.Content>
      </Card>
    );
  }
}

export default EditableTimerList;
