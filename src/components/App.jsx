import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleFeedback = e => {
  //   if (e === 'Good') {
  //     this.setState({ good: this.state.good + 1 });
  //   } else if (e === 'Neutral') {
  //     this.setState({ neutral: this.state.neutral + 1 });
  //   } else if (e === 'Bad') {
  //     this.setState({ bad: this.state.bad + 1 });
  //   }
  // };
  handleFeedback = type => {
    //  const { name, value } = e.target;
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));

    // const { type } = this.state;

    // this.setState(prevState => ({
    //   [type]: prevState[type] + 1
    // }));
    // console.log(this.state.good);
    // this.setState({ good: this.state.good + 1 });
    // if (e === 'Good') {
    //   this.setState({ good: this.state.good + 1 });
    // } else if (e === 'Neutral') {
    //   this.setState({ neutral: this.state.neutral + 1 });
    // } else if (e === 'Bad') {
    //   this.setState({ bad: this.state.bad + 1 });
    // }
  };

countTotalFeedback = () => {
  const good = this.state.good;
  const neutral = this.state.neutral;
  const bad = this.state.bad;

  return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    // if (this.countTotalFeedback() === 0) {
    //   return 0;
    // }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        // style={{
        //   marginLeft: '30px',
        //   height: '100vh',
        //   display: 'block',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        

        // }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
};
