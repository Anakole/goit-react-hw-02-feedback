import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = element => {
    const keyState = Object.keys(this.state);

    keyState.forEach(key => {
      if (element.target.value === key) {
        this.setState(prevState => ({
          [key]: prevState[key] + 1,
        }));
      }
    });
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
    const keyState = Object.keys(this.state);
    return (
      <div>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={keyState}
              onElementClick={this.handlerClick}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            this.totalFeedbacks() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.totalFeedbacks()}
                positiveFeedback={this.feedbackPercentage()}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )
          }
        />
      </div>
    );
  }
}
