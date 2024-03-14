import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  background-color: var(--primary-light-blue);
  .img {
    max-width: 280px;
    height: 430px;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1.5rem;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
  }
  .author__img {
    aspect-ratio: 1;
    width: 70px;
    position: absolute;
    left: 16px;
    border-radius: 100%;
    top: 395px;
    img {
      object-position: 50% 50%;
    }
  }
  .title {
    color: var(--text-1);
    padding-top: 25px;
    font-size: 22px;
    margin-bottom: 0.5rem;
  }
  .excerpt {
    font-size: 12px;
    margin-left: 16px;
    text-wrap: pretty;
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
    }
  }
`;
