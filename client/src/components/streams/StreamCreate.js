import React, { Component } from "react";
import {Field, reduxForm } from "redux-form";
//Field is UpperCase since React Component that will show on screen.
// reduxForm is a function same functionality as the connect() from react-redux

class StreamCreate extends Component {
    renderInput({input}) {  //  destructured: formProps){
       // console.log(formProps);
        return ( <input {...input} /> // destructured: formProps.input} />
        /*  <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
          />*/
        );
    }

    render() {
        return (
          <form>
              <Field name={"title"} component={this.renderInput}/>
              <Field name={"description"} component={this.renderInput}/>
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
