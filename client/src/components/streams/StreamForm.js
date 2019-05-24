import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
//import { connect, create } from "react-redux";
//import {createStream} from "../../actions";
//Field is UpperCase since React Component that will show on screen.
// reduxForm is a function same functionality as the connect() from react-redux

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className={"ui error message"}>
          <div className={"header"}>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {  //  destructured: formProps){
    //console.log(meta);
    // console.log(formProps);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (    // destructured: formProps.input} />
      // autoComplete turns off AutoFill dropDown
      <div className={className}>
        <label>{label} </label>
        <input {...input} autoComplete={"off"}/>
        {this.renderError(meta)}
      </div>      //<div>{meta.error}</div>
      /*  <input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />*/
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);   ///this.props.createStream(formValues);
    // console.log(formValues);
    //event.preventDefault();
  };

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={"ui form error"}>
        <Field name={"title"} component={this.renderInput} label="Enter Title"/>
        <Field name={"description"} component={this.renderInput} label="Enter Description"/>
        <button className={"ui button primary"}>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};


export default reduxForm({  //const formWrapped =
  form: "streamForm",
  validate //:validate  can be condensed since same name
})(StreamForm);

//export default connect(null, {createStream})(formWrapped);