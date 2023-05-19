// Libs
import React, { useState } from 'react';
// React components
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistics } from '../Statistics/Statistics';
// Styled components
import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };

  const totalFeedback = (() => {
    return Object.values(feedbacks).reduce((total, value) => total + value, 0);
  })();

  const positiveFeedbackPercentage = (() => {
    return totalFeedback === 0
      ? 0
      : Math.trunc((feedbacks.good * 100) / totalFeedback);
  })();

  const handleFeedback = item => {
    switch (item) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error(`Case "${item}" is not suppurted.`);
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={handleFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 && <Notification message="There is no feedback" />}

        {totalFeedback !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
}
