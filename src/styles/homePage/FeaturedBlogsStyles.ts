import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding: 5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .featuredBlogs__text {
    max-width: 450px;
  }
  .more {
    padding-top: 20px;
  }
  .title {
    text-align: center;
    font-size: 24px;
    color: var(--text-1);
  }
`;
