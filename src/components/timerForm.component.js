import React from "react";
import { Card, Header, Form, Button } from "semantic-ui-react";

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? "Update" : "Create";
    return (
      <Card fluid>
        <Card.Content>
          <Header>Timer Form</Header>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input type="text" defaultValue={this.props.project} />
            </Form.Field>
            <Button.Group widths="2">
              <Button basic color="blue">
                {submitText}
              </Button>
              <Button basic color="red">
                Cancel
              </Button>
            </Button.Group>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default TimerForm;
