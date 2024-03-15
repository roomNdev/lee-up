import styled from 'styled-components';

export const PodcastsStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  .container {
    height: 100%;
  }
  .description {
    font-size: 24px;
  }
  .links {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;

    .link {
      border-radius: 10px;
      padding-block: 4px;
      padding-inline: 16px;
      background-color: #fff;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      transition: background-color .2s;
      /* width: 220px; */
      gap: 6px;
      color: var(--gray);
      svg {
        width: 40px;
      }
      &:hover {
        background-color: #eee;
      }
    }
  }
  .hero__wrapper {
    width: 100%;
    height: 70vh;  
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      z-index: -1;
    }
    .left {
      width: 100%;
      padding: 0 0 0 0;
      .hero__heading {
        max-width: 700px;
        font-size: 8rem;
        font-family: 'Inter Variable', sans-serif;
        font-weight: 700;
        margin: 0.2rem 0;
        color: var(--text-1);
      }
      .hero__thin {
        display: block;
        font-weight: 400;
      }
      .hero__text {
        max-width: 350px;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
    }
      .hero__image {
        position: absolute;
        z-index: -1;
        right: 0;
        top: 20%;
        width: 30%;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 80px;
      padding-bottom: 80px;
      &::after {
        width: 100%;
      }
      .hero__image {
        position: absolute;
        z-index: -1;
        right: 0;
        top: 30%;
          /* height: 300px; */
          /* margin: 0 auto; */
        }
      .right {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 330px;
          font-size: 3rem;
        }
      }
    }
  }
`;
