import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
  font-family: 'Inter Variable', sans-serif;
  color: var(--grey);
  font-size: 1.6rem;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
