import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const FeedbackBtn = styled.button`
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: ${({ children }) => {
    switch (children) {
      case 'good':
        return 'green';
      case 'bad':
        return 'red';
      default:
        return 'gray';
    }
  }};
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.8;
  transition: box-shadow 250ms linear, opacity 250ms linear;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    opacity: 1;
    box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  }
`;
