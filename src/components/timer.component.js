import React from "react";
import { Card, Button } from "semantic-ui-react";

class Timer extends React.Component {
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
          <span className="right floated edit icon">
            <i className="edit icon" />
          </span>
          <span className="right floated trash icon">
            <i className="trash icon" />
          </span>
        </div>
        <Button color="blue">Start</Button>
      </Card>
    );
  }
}

export default Timer;
