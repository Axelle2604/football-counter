import React from 'react';

const ResetButton = props => (
  <div className="ResetButton">
    <button onClick={props.resetFunction}>RESET</button>
  </div>
);

export default ResetButton;
