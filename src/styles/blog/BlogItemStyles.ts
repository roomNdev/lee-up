import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  max-width: 270px;
  width: 40%;
  background-color: var(--primary-light-blue);
  .img {
    max-width: 280px;
    /* min-width: 280px; */
    height: 430px;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1.5rem;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
    img {
      object-fit: cover !important;
    }
  }
  .author__img {
    aspect-ratio: 1;
    width: 70px;
    height: 70px;
    position: absolute;
    left: 16px;
    border-radius: 100%;
    top: 395px;
    z-index: 1;
    img {
      object-position: 50% 50%;
    }
  }
  .author__name {
    background-color: var(--text-1);
    color: var(--white-1);
    position: absolute;
    text-align: center;
    width: 70%;
    /* z-index: ; */
    top: 420px;
    right: 0;
    font-size: 1.2rem;
  }
  .title {
    color: var(--text-1);
    margin-top: 20px;
    /* padding-top: 25px; */
    font-size: 22px;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .excerpt {
    font-size: 12px;
    margin-inline: 16px;
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
    text-align: center;
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
      margin-inline: 8px;
      font-size: 16px;
    }
    .excerpt {
      display: none;
    }
    .img{
      height: 215px;
    }
    .author__img{
      top: 195px;
      width: 40px;
      height: 40px;
    }
    .author__name{
      display: none;
    }
    .publishedAt {
      font-size: 8px;
    }
  }
  @media only screen and (max-width: 360px) {
    .author__img{
      left: 0;
      top: 195px;
    }
    .author__name{
      display: none;
    }
    .title {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
