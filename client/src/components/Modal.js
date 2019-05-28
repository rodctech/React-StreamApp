import ReactDOM from "react-dom";
import React from "react";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={()=> history.push('/')}
      className={"ui dimmer modals visible active"}
    >
      <div onClick={(e) => e.stopPropagation()} className={"ui standard modal visible active "}>
        <div className="header">{props.title}</div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">
          {props.actions}

        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

//TOOK OUT of actions for Modal Component reuse
/*<div className="ui primary button">Delete!</div>
         <div className="ui cancel button">Cancel</div>*/