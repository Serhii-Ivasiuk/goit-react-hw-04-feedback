import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target: { dataset } }) => {
    this.setState(prevState => {
      return { [dataset.feedback]: prevState[dataset.feedback] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.trunc((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <ul style={{ display: 'flex', gap: 10 }}>
          <li>
            <button
              type="button"
              data-feedback="good"
              onClick={this.handleFeedback}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              data-feedback="neutral"
              onClick={this.handleFeedback}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              data-feedback="bad"
              onClick={this.handleFeedback}
            >
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
