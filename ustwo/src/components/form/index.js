import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Text, Checkbox, Radio, Label, RadioGroup } from '+src/components/FormElements';
import { styles } from './styles.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      form: {
      },
      reset: false
    }

    this.errorMessages = {
      emailError: "Please provide a valid email",
    }
  }

  handleFormChange(type, e, value){
    if(type == 'type'){
      if(value){
        if(this.state.form.type == undefined)
          this.state.form.type = new Set();
        this.state.form.type.add(e.currentTarget.value);
      }else{
        this.state.form.type.delete(e.currentTarget.value);
      }
    }else{
      this.state.form = {
        ...this.state.form,
        [type]: e.currentTarget.value
      }
    }
    this.state.reset = false;
    this.checkForm();
    console.log(this.state.form);
  }

  checkForm(){
    if(this.state.form.name == null || this.state.form.email == ""){
      this.disableButton();
    }else if(this.state.form.email == null || this.state.form.email == ""){
      this.disableButton();
    }else if(this.state.form.celebration == null || this.state.form.celebration == ""){
      this.disableButton();
    }else if(this.state.form.wish == null || this.state.form.wish == ""){
      this.disableButton();
    }else if(this.state.form.type == null || this.state.form.type.size == 0){
      this.disableButton();
    }else{
      this.enableButton();
    }
  }

  submitForm(e) {
    e.preventDefault();
    alert("Success! Check the console for the form data");
    console.log(this.state.form);
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

  _resetForm(){
    this.setState({
      form: {
      },
      reset: true
    })
  }

  render() {
    return (
      <section className={`${styles}`}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper className='paper'>
            <form
              onSubmit={this.submitForm.bind(this)}
            >
              <h2>Cake Enquiry Form</h2>
              <Text
                name="name"
                required
                autoComplete="off"
                floatingLabelText="Name"
                fullWidth={true}
                reset={this.state.reset}
                onChange={this.handleFormChange.bind(this, 'name')}
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
                reset={this.state.reset}
                onChange={this.handleFormChange.bind(this, 'email')}
              />
              <section className="section">
                <Label name="Type of cake:"/>
                <Checkbox 
                  name="type"
                  label="Cupcakes"
                  value="Cupcakes"
                  reset={this.state.reset}
                  onChange={this.handleFormChange.bind(this, 'type')}
                />
                <Checkbox 
                  name="type"
                  label="Cheesecake"
                  value="Cheesecake"
                  reset={this.state.reset}
                  onChange={this.handleFormChange.bind(this, 'type')}
                />
                <Checkbox 
                  name="type"
                  label="Butter Cakes"
                  value="Butter Cakes"
                  reset={this.state.reset}
                  onChange={this.handleFormChange.bind(this, 'type')}
                />
                <Checkbox 
                  name="type"
                  label="Mudcakes"
                  value="Mudcakes"
                  reset={this.state.reset}
                  onChange={this.handleFormChange.bind(this, 'type')}
                />
              </section>

              <section className="section">
                <Label name="Celebration type:"/>
                <RadioGroup reset={this.state.reset} required name="celebration" onChange={this.handleFormChange.bind(this, 'celebration')}>
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
                  name="Dream cake"
                  autoComplete="off"
                  multiLine={true}
                  fullWidth={true}
                  reset={this.state.reset}
                  onChange={this.handleFormChange.bind(this, 'wish')}
                />
              </section>
              <section className="btnGroup">
                <FlatButton
                  className="restartBtn"
                  type="reset"
                  label="Reset"
                  onClick={this._resetForm.bind(this)}
                />
                <FlatButton
                  className="submitBtn"
                  type="submit"
                  label="Submit"
                  disabled={!this.state.canSubmit}
                />
              </section>
            </form>
          </Paper>
        </MuiThemeProvider>
      </section>
    );
  }
}