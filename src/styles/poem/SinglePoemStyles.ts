import styled from 'styled-components';

export default styled.div`
  max-width: 700px;
  margin: 0 auto;
  .poem-cover-image {
    /* margin-bottom: 2rem; */
    display: inline;
    /* height: 200px; */
    /* margin: 0 auto; */
    /* display: flex; */
    img {
      max-height: 400px;
      height: 100%;
      object-fit: contain !important;
    }
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: var(--text-1);
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  p {
    width: 100%;
      /* text-align: center; */
    }
  .body {
    /* display: flex; */
    margin-top: 2rem;
    
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  } 
  .button__wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
  }
`;
