import React from "react";
import Modal from '../Modal';

const StreamDelete = () => {
    const actions = (
      //Replaced <div> for <React.Fragment> to solve buttons visual issue
      //and to assign multiple(buttons) JSX vars to a single element by
      //using <React.Fragment> as a SINGLE TAG wrapping both buttons
      <React.Fragment>
          <button className={"ui button negative"}>Delete</button>
          <button className={"ui button"}>Cancel</button>
      </React.Fragment>
    );

    return (
      <div>
          Stream Delete
          <Modal
            title={"Delete Stream"}
            content={"Are you sure you want to delete stream?"}
            actions={actions}

          />

      </div>
    );
};

export default StreamDelete;
