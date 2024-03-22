import styled from 'styled-components';

export const PoemItemStyles = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  min-width: 200px;
  /* width: 40%; */
  max-width: 250px;
  margin-inline: 10px;
  /* padding-inline: 10px; */
  background-color: var(--primary-light-blue);
  height: max-content;
  .img {
    max-width: 280px;
    height: 430px;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1.5rem;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
  }
  .by__container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2px;
    padding-inline: 10px;
    font-size: 14px;
    .data-author{
      display: flex;
      align-items: center;
      justify-content: center;
      /* flex-wrap: wrap; */
    }
  }
  .author__img {
    aspect-ratio: 1;
    width: 40px;
    height: 40px;
    /* position: absolute; */
    /* right: 40px; */
    /* bottom: 70px; */
    background-color: var(--text-1);
    border-radius: 100%;
    img {
      object-position: 50% 50%;
    }
  }
  .title {
    color: var(--text-1);
    padding-top: 25px;
    font-size: 24px;
    margin-bottom: 0.5rem;
    margin-inline: 4px;
    text-align: center;
  }
  .button__wrapper {
    width: 100%;
    margin-block: 16px;
  }
  .button__more {
    background-color: var(--text-1);
    font-size: 12px;
    padding: 0;
    padding-block: 8px;
    padding-inline: 24px;
    border-radius: 0 10px 10px 0;
    margin: 0;
  }
  .publishedAt {
    border-top: 1px solid var(--text-1);
    padding-block: 12px;
    margin-bottom: 12px;
  }
  &:hover {
    .img [data-main-image] {
      transform: scale(1.05);
    }
  }
  .categoriesText {
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }
    .by__container{
      font-size: 1.1rem;
    }
    .author__img{
      width: 30px;
      height: 30px;
    }
  }
`;
