import React, { Component } from "react";
import { Container, Card, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container text>
        <br />
        <style>{`html, body {background-color: #252839 !important;}}`}</style>

        <Card centered={true}>
          <Card.Content>
            <Header as="h3" textAlign="center" color="grey">
              Timers App
            </Header>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
