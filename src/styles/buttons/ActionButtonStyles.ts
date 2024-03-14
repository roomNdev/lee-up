import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  border: 2px solid var(--text-1);
  padding: 0.6rem;
  border-radius: 8px;
  color: var(--text-1);
  transition-property: color, background-color, border;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2.5rem;
  }
  * {
    pointer-events: none;
  }
  &:hover {
    background-color: var(--light-gray);
    /* color: var(--text-1);
    border: 2px solid var(--text-1); */
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
    svg {
      font-size: 1.8rem;
    }
  }
`;
