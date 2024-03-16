import styled from 'styled-components';

export const PoemSectionStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  margin-top: 20vh;
  width: 100%;
  .container {
    height: 100%;
    width: 100%;
    margin: 0;
    .hero__wrapper {
    width: 80%;
    height: 100%;  
    margin-bottom: 10vh;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 40px;
      .hero__heading {
        max-width: 700px;
        font-size: 7rem;
        font-family: 'Inter Variable', sans-serif;
        font-weight: 700;
        margin: 0.2rem 0;
        color: var(--text-1);
      }
      .hero__thin {
        font-weight: 400;
      }
    }
  }
  .image__container {
        display: flex;
        align-items: center;
        justify-content: center;
    .hero__image__creativa {
      overflow: visible;
      position: absolute;
      right: 0;
      bottom: 20%;
      max-width: 30%;
      img {
          z-index: -1;
          border-radius: 20px;
        }
        &::after {
            border-radius: 32px;
            width: 100%;
            /* max-width: 300px; */
            min-height: 100%;
            content: "";
            position: absolute;
            z-index: -10;
            top: 10%;
            right: -10px;
            background-color: var(--primary-light-blue);
          }
    }
  }
  .text__wrapper{ 
          display: flex;
          gap: 24px;
          width: 100%;
          align-items: center;
          text-align: center;
          flex-direction: column;
          p {
            width: 80%;
          }
          a {
          color: var(--text-1);
          font-weight: 500;
          }
      }
  
  @media only screen and (max-width: 768px) {
    min-height: 60vh;
    .container{
      .hero__wrapper {
        display: flex;
      .hero__heading {
        max-width: 330px;
        font-size: 4rem;
        }
      }
    }
    .image__container {
      .hero__image__creativa{
        max-width: 70%;
        position: relative;
        z-index: 1;
      }
    }
  }
`;
