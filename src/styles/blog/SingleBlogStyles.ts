import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    max-width: 700px;
  }
  .image__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .blog-cover-image {
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
    margin-top: 20px;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    text-align: center;
    color: var(--text-1);
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt,
  .bookAuthor,
  .points {
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
  .body {
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
  .author__img {
    width: 30px;
    height: 30px;
    background-color: var(--text-1);
    border-radius: 100%;
  }
`;
