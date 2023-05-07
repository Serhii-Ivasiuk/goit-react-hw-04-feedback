// Libs
import React from 'react';
import PropTypes from 'prop-types';
// Styled components
import { StatisticsList, StatisticsItem, Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>
          Good: <Value>{good}</Value>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Neutral: <Value>{neutral}</Value>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Bad: <Value>{bad}</Value>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Total: <Value>{total}</Value>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Positive feedback: <Value>{positivePercentage}%</Value>
        </p>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
