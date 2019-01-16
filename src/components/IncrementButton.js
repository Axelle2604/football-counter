import React from 'react';

const IncrementButton = props => (
  <div className="IncrementButton">
    <button onClick={props.incrementFunction}>{props.buttonName}</button>
  </div>
);

export default IncrementButton;
