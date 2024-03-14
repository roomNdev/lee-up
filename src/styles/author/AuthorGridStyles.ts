import styled from 'styled-components';

export const AuthorGridStyles = styled.div`
  display: grid;
  margin-top: 3.5rem;
  display: grid;
  gap: 30px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 280px);
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 250px);
    gap: 2rem;
  }
`;
