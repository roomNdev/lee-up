import styled from 'styled-components';

export default styled.div`
  margin-top: 10vh;
  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    color: var(--text-1);
    margin-bottom: 20px;
  }
  details:nth-child(1){
    font-size: 30px;
    padding-block: 15px;
    background-color: var(--text-1);
  }
  details {
    margin-block: 16px;
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
}
  /* details[close] > *:not(summary) {
    animation: details-show reverse 150ms ease-in-out;
  } */
  details[open] > *:not(summary) {
    animation: details-show 250ms ease-in-out;
  }
`;
