import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onNeutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  totalFeedbacks() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  feedbackPercentage() {
    const { good } = this.state;
    return Math.floor((good / this.totalFeedbacks()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <ul>
            <li onClick={this.onGoodClick}>Good</li>
            <li onClick={this.onNeutralClick}>Neutral</li>
            <li onClick={this.onBadClick}>Bad</li>
          </ul>
        </div>
        <div>
          <h2>Statistic</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {this.totalFeedbacks()}</li>
            <li>
              Positive feedback:
              {this.feedbackPercentage() || 0}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
