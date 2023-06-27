import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { PiSpinner } from 'react-icons/pi';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(1turn);
}
`;

export const Spinner = styled(PiSpinner)`
  display: flex;
  margin: auto;
  margin-top: 20px;
  animation: ${spin} 0.85s linear infinite;
`;

Spinner.defaultProps = {
  size: 40,
};
