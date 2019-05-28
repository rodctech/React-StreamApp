import React from "react";
import flv from "flv.js";
///DO NOT AutoComplete flv.js , it will reference Directory instead of directory
import { connect } from "react-redux";
import { fetchStream } from "../../actions";


class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(this.videoRef); //ERROR videoRef was showing as Null
    //Stream is not fetched yet when render()>Loading.. runs.
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  /* PORTION MOVED INTO buildPlayer() to prevent ^^^ Error
    this.player =  flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();*/

  //this.player.play(); Supposed to autoPlay video, wont work in some browsers
  //}

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls/>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
      //controls by itself its the same as controls={true}
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchStream })(StreamShow);