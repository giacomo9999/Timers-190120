import React from "react";
import { Card, Header, Form, Button } from "semantic-ui-react";

class TimerForm extends React.Component {
  state = { title: this.props.title || "", project: this.props.project || "" };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleProjectChange = e => {
    this.setState({ project: e.target.value });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    });
  };



  render() {
    const submitText = this.props.id ? "Update" : "Create";
    return (
      <Card fluid>
        <Card.Content>
          <Header>Timer Form</Header>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input
                type="text"
                value={this.state.project}
                onChange={this.handleProjectChange}
              />
            </Form.Field>
            <Button.Group widths="2">
              <Button basic color="blue" onClick={this.handleSubmit}>
                {submitText}
              </Button>
              <Button basic color="red" onClick={this.props.onFormClose}>
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
