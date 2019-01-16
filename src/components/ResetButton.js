import React, { Component } from 'react';

function ResetButton(props) {
  return (
    <div className="resetButton">
      <button onClick={props.resetFunction}>RESET</button>
    </div>
  );
}

export default ResetButton;
