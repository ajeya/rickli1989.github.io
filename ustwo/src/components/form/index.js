import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { Text, Checkbox, Radio, Label, RadioGroup } from '+src/components/FormElements';
import { styles } from './styles.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false
    }

    this.errorMessages = {
      emailError: "Please provide a valid email",
    }
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  submitForm(data) {
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }

  render() {
    return (
      <section className={`${styles}`}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper className='paper'>
            <form>
              <h2>Cake Enquiry Form</h2>
              <Text
                name="name"
                required
                autoComplete="off"
                floatingLabelText="Name"
                fullWidth={true}
              />

              <Text
                name="email"
                type="email"
                validations="isEmail"
                validationError={this.errorMessages.emailError}
                required
                autoComplete="off"
                floatingLabelText="Email"
                fullWidth={true}
              />
              <section className="section">
                <Label name="Type of cake:"/>
                <Checkbox 
                  name="type"
                  label="Cupcakes"
                />
                <Checkbox 
                  name="type"
                  label="Cheesecake"
                />
                <Checkbox 
                  name="type"
                  label="Butter Cakes"
                />
                <Checkbox 
                  name="type"
                  label="Mudcakes"
                />
              </section>

              <section className="section">
                <Label name="Celebration type:"/>
                <RadioGroup name="celebration">
                  <Radio
                    value="birthday"
                    label="Birthday"
                  />
                  <Radio
                    value="wedding"
                    label="Wedding"
                  />
                  <Radio
                    value="corporate"
                    label="Corporate"
                  />
                  <Radio
                    value="other"
                    label="Other"
                  />
                </RadioGroup>
              </section>

              <section className="section">
                <Label name="Tell us about your dream cake:"/>
                <Text
                  name="Dreak cake"
                  autoComplete="off"
                  multiLine={true}
                  fullWidth={true}
                />
              </section>
             
              <FlatButton
                className="submitBtn"
                type="submit"
                label="Submit"
                disabled={!this.state.canSubmit}
              />
            </form>
          </Paper>
        </MuiThemeProvider>
      </section>
    );
  }
}