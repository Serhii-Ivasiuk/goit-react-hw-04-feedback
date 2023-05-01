import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
`;

export const StatisticsItem = styled.p`
  min-width: 180px;
  border-bottom: 1px solid gray;
`;

export const Value = styled.span`
  font-weight: 700;
  color: gray;
`;
