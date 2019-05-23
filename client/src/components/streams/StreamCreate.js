import React, { Component } from "react";
import {Field, reduxForm } from "redux-form";
//Field is UpperCase since React Component that will show on screen.
// reduxForm is a function same functionality as the connect() from react-redux

class StreamCreate extends Component {
    renderInput({input, label }) {  //  destructured: formProps){
       // console.log(formProps);
        return (    // destructured: formProps.input} />
          <div className={"field"}>
            <label>{label} </label>
           <input {...input} />
          </div>
        /*  <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
          />*/
        );
    }

    onSubmit(formValues){
     // console.log(formValues);
      //event.preventDefault();
    }
    render() {
     // console.log(this.props);
        return (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={"ui form"}>
              <Field name={"title"} component={this.renderInput} label="Enter Title"/>
              <Field name={"description"} component={this.renderInput} label="Enter Description"/>
            <button className={"ui button primary"}>Submit</button>
          </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreateTemp'
})(StreamCreate);

/*
import React from "react";



const StreamCreate = () => {
    return <div>Stream Create</div>;
};

export default StreamCreate;
*/
