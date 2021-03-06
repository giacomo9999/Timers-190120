import React from "react";
import { Card, Button } from "semantic-ui-react";

class Timer extends React.Component {
  // onTrashClick comes down as a prop from EditableTimer
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Timer </Card.Header>
          <Card.Meta>{this.props.title} </Card.Meta>
          <Card.Meta>{this.props.project} </Card.Meta>
          <Card.Description as="h2">{this.props.elapsed}</Card.Description>
        </Card.Content>
        <div className="extra content">
          <span
            className="right floated edit icon"
            onClick={this.props.onEditClick}
          >
            <i className="edit icon" />
          </span>
          <span
            className="right floated trash icon"
            onClick={this.handleTrashClick}
          >
            <i className="trash icon" />
          </span>
        </div>
        <Button color="blue">Start</Button>
      </Card>
    );
  }
}

export default Timer;
