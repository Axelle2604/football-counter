import React, { Component } from 'react';

function IncrementButton(props) {
  return (
    <div className="IncrementButton">
      <button onClick={props.incrementFunction}>{props.buttonName}</button>
    </div>
  );
}

export default IncrementButton;
