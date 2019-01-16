import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './components/Score.js';
import IncrementButton from './components/IncrementButton.js';
import ResetButton from './components/ResetButton.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamAScore: 0,
      teamBScore: 0,
      teamAYellowCard: 0,
      teamBYellowCard: 0,
      teamARedCard: 0,
      teamBRedCard: 0,
    };
  }

  getPoint(value) {
    this.setState({
      [value]: this.state[value] + 1,
    });
  }

  resetPoints() {
    this.setState({
      teamAScore: 0,
      teamBScore: 0,
      teamAYellowCard: 0,
      teamBYellowCard: 0,
      teamARedCard: 0,
      teamBRedCard: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="teams">
          <div>Team A</div>
          <div>Team B</div>
        </div>
        <div className="scores">
          <Score score={this.state.teamAScore} /> :
          <Score score={this.state.teamBScore} />
        </div>
        <div className="yellowCards">
          <Score score={this.state.teamAYellowCard} /> :
          <Score score={this.state.teamBYellowCard} />
        </div>
        <div className="redCards">
          <Score score={this.state.teamARedCard} /> :
          <Score score={this.state.teamBRedCard} />
        </div>
        <div className="goalButtons">
          <IncrementButton
            incrementFunction={this.getPoint.bind(this, 'teamAScore')}
            buttonName="GOAL!"
          />
          :
          <IncrementButton
            incrementFunction={this.getPoint.bind(this, 'teamBScore')}
            buttonName="GOAL!"
          />
        </div>
        <div className="yellowCardButtons">
          <IncrementButton
            incrementFunction={this.getPoint.bind(this, 'teamAYellowCard')}
            buttonName="YELLOW CARD"
          />
          :
          <IncrementButton
            incrementFunction={this.getPoint.bind(this, 'teamBYellowCard')}
            buttonName="YELLOW CARD"
          />
        </div>
        <div className="redCardButtons">
          <IncrementButton
            incrementFunction={this.getPoint.bind(this, 'teamARedCard')}
            buttonName="RED CARD"
          />
          :
          <IncrementButton
            incrementFunction={this.getPoint.bind(this, 'teamBRedCard')}
            buttonName="RED CARD"
          />
        </div>
        <ResetButton resetFunction={this.resetPoints.bind(this)} />
      </div>
    );
  }
}

export default App;
