import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  handleNeutralFeedback = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  handleBadFeedback = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => (total += value), 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() === 0
      ? 0
      : Math.trunc((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <ul style={{ display: 'flex', gap: 10 }}>
          <li>
            <button type="button" onClick={this.handleGoodFeedback}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleNeutralFeedback}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleBadFeedback}>
              Bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>

        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p>Total: {this.countTotalFeedback()}</p>
          </li>
          <li>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </li>
        </ul>
      </div>
    );
  }
}
