import React, { Component } from 'react';

function Score(props) {
  return (
    <div className="score">
      <div>{props.score}</div>
    </div>
  );
}

export default Score;
