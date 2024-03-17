import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  .container {
    height: 100%;
  }

  .image__container {
    .hero__image__creativa {
      overflow: visible;
      position: absolute;
      right: 0;
      bottom: 0;
      img {
          z-index: 10;
          max-width: 300px;
          border-radius: 20px;
        }
          &::after {
            border-radius: 32px;
            width: 100%;
            max-width: 300px;
            min-height: 100%;
            content: "";
            position: absolute;
            z-index: -1;
            top: 10%;
            right: -10px;
            background-color: var(--primary-light-blue);
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
        top: 0;
        width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    min-height: 50vh;
    margin-bottom: 20vh;
    .hero__wrapper {
      height: 50vh;  
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
          height: 300px;
          margin: 0 auto;
        
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 50%;
          font-size: 3rem;
          padding-bottom: 15%;
        }
      }
    }
    .image__container {
      .hero__image__creativa{
      position: relative;
      }
    }
  }
`;
