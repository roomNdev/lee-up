import styled from 'styled-components';

export default styled.div`
  margin-top: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    color: var(--text-1);
    margin-bottom: 20px;
  }
  /* details {
    font-size: 20px;
    padding-block: 10px;
    text-align: center;
    background-color: var(--primary-light-blue);
    border-radius: 12px;
  } 
  @keyframes details-show {
  from {
    opacity:0;
    transform: var(--details-translate, translateY(-0.5em));
  }
} */
  /* details[close] > *:not(summary) {
    animation: details-show reverse 150ms ease-in-out;
  } */
  /* details[open] > *:not(summary) {
    animation: details-show 250ms ease-in-out;
  } */
  .more {
    margin-top: 10vh;
  }
`;
