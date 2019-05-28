import React from "react";
import {connect} from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import {fetchStream} from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      //Replaced <div> for <React.Fragment> to solve buttons visual issue
      //and to assign multiple(buttons) JSX vars to a single element by
      //using <React.Fragment> as a SINGLE TAG wrapping both buttons
      <React.Fragment>
        <button className={"ui button negative"}>Delete</button>
        <button className={"ui button"}>Cancel</button>
      </React.Fragment>
    );
  }

  renderContent() {
    if(!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
  }


  render() {
    //ONE Way to solve wait while compDidMount / we have the stream
    /*if(!this.props.stream) {
      return <div>Loading...</div>;
    }*/

    return (
     // <div>
     //   Stream Delete
        <Modal
          title={"Delete Stream"}
          content={this.renderContent()}
          actions={this.renderActions()}  //Make sure to call () method
          // to pass result to actions prop
          onDismiss={() => history.push("/")}
        />
     // </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};
//state.streams is an object with all the streams we've loaded up.
//you can flip back to reduxDevTools click on state button
// and then expand streams. You find Object where keys are the IDs of streams

export default connect(mapStateToProps, {fetchStream}) (StreamDelete);
