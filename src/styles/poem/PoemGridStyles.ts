import styled from 'styled-components';

export const PoemGridStyles = styled.div`
  display: flex;
  margin-top: 3.5rem;
  gap: 30px;
  
  justify-content: center;
  flex-wrap: wrap;
  .no__members {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;
