import styled from 'styled-components';

export const BlogGridStyles = styled.div`
  margin-top: 3.5rem;
  display: grid;
  gap: 5rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 280px);
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 3rem;
  }
`;
