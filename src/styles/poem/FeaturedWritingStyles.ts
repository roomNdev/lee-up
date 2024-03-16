import styled from 'styled-components';

export const FeaturedWritingStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 10vh;
  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    color: var(--text-1);
    margin-bottom: 20px;
  }
  .featuredBlogs__text {
    max-width: 450px;
  }
`;
