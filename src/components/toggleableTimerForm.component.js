import React from "react";
import { Grid, Button } from "semantic-ui-react";
import TimerForm from "./timerForm.component";

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <Grid>
          <Grid.Row centered>
            <Button size="mini">
              <h2>+</h2>
            </Button>
          </Grid.Row>
        </Grid>
      );
    }
  }
}

export default ToggleableTimerForm;
