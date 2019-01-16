import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './components/Score.js';
import IncrementButton from './components/IncrementButton.js';
import ResetButton from './components/ResetButton.js';

const datas = {
  teamAScore: 0,
  teamBScore: 0,
  teamAYellowCard: 0,
  teamBYellowCard: 0,
  teamARedCard: 0,
  teamBRedCard: 0,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = datas;
  }

  getPoint(value) {
    this.setState({
      [value]: this.state[value] + 1,
    });
  }

  resetPoints() {
    this.setState(datas);
  }

  render() {
    const {
      teamAScore,
      teamBScore,
      teamAYellowCard,
      teamBYellowCard,
      teamARedCard,
      teamBRedCard,
    } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="teams">
            <div>Team A</div>
            <div>Team B</div>
          </div>
          <div className="score">
            <Score score={teamAScore} /> :
            <Score score={teamBScore} />
          </div>
          <div className="score">
            <Score score={teamAYellowCard} />
            <Score score={teamBYellowCard} />
          </div>
          <div className="score">
            <Score score={teamARedCard} />
            <Score score={teamBRedCard} />
          </div>
          <div className="incrementButtons">
            <IncrementButton
              incrementFunction={this.getPoint.bind(this, 'teamAScore')}
              buttonName="GOAL!"
            />
            <IncrementButton
              incrementFunction={this.getPoint.bind(this, 'teamBScore')}
              buttonName="GOAL!"
            />
          </div>
          <div className="incrementButtons">
            <IncrementButton
              incrementFunction={this.getPoint.bind(this, 'teamAYellowCard')}
              buttonName="YELLOW CARD"
            />
            <IncrementButton
              incrementFunction={this.getPoint.bind(this, 'teamBYellowCard')}
              buttonName="YELLOW CARD"
            />
          </div>
          <div className="incrementButtons">
            <IncrementButton
              incrementFunction={this.getPoint.bind(this, 'teamARedCard')}
              buttonName="RED CARD"
            />
            <IncrementButton
              incrementFunction={this.getPoint.bind(this, 'teamBRedCard')}
              buttonName="RED CARD"
            />
          </div>
          <ResetButton resetFunction={this.resetPoints.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
