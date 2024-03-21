import styled from 'styled-components';

export const PoemSectionStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  margin-top: 15vh;
  padding: 10px;
  width: 100%;
  .container {
    height: 100%;
    width: 100%;
    margin: 0;
    .hero__wrapper {
    width: 100%;
    height: 100%;  
    margin-bottom: 2vh;
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    align-items: center;
    justify-content: center;
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
        grid-column: 3/5;
        grid-row: 2;
        align-self: center;
        justify-self: center;
    .hero__image__creativa {
      overflow: visible;
      right: 0;
      bottom: 20%;
      max-width: 100%;
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
            top: 5%;
            left: -5%;
            background-color: var(--primary-light-blue);
          }
    }
  }
  .text__wrapper{         
        grid-column: 1/3;
        grid-row: 1/3;
          display: flex;
          gap: 24px;
          width: 100%;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
            align-self: center;
            justify-self: center;
          
      }
    
      p {
            width: 80%;
            font-size: 18px;
            grid-column: 1 / 3;
            grid-row: 3 / 4 ;
            align-self: center;
            justify-self: center;
            text-align: center;
          }
          a {
          color: var(--text-1);
          font-weight: 500;
          text-decoration: underline;
          }
  @media only screen and (max-width: 1000px) {
    .container{
      .hero__wrapper{
      .hero__heading{
       font-size: 4rem;
      }
    }
      .text__wrapper {
        grid-row: 1;
        grid-column: 1/5;

      }
    }
    .image__container {
        grid-column: 1/5;
      grid-row: 2/3;
      .hero__image__creativa{
        max-width: 50%;
        position: relative;
        z-index: 1;
        max-height: 400px;
      }
    }
    p {
        margin-top: 40px;
        grid-column: 1/5;
        grid-row: 3/4;

    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 60vh;
    margin-top: 8vh;

    .container{
      .hero__wrapper {
        gap: 18px;
        
      .hero__heading {
        max-width: 330px;
        font-size: 4rem;
        }
      }
    }
    .image__container {
      grid-row: 2/4;
      .hero__image__creativa{
        max-width: 75%;
        position: relative;
        z-index: 1;
      }
    }
    p {
      grid-row: 4;
    }
  }
  
  @media only screen and (max-width: 600px) {
    .container{
      .hero__wrapper {
        gap: 0;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 150px);
      }
    }
    .image__container{
      grid-row: 3;
    }
    
    p {
      margin-top: 0;
      grid-row: 5;
    }
  }
  
  @media only screen and (max-width: 400px) {    
    .container{
      .hero__wrapper {
        gap: 5px;
        grid-template-rows: repeat(5, 160px);
      }
    }
    .image__container{
      grid-row: 3/4;
    }
    p {
      margin-top: 15px;
      grid-row: 4/6;
    }
  }
  
  @media only screen and (max-width: 350px) { 
    .container{
      margin-top: 10px;
      .hero__wrapper {
        /* gap: 5px; */
        grid-template-rows: repeat(6, 150px);
      }
    }
    .image__container{
      grid-row: 3/4;
    }
    p {
      margin-top: 15px;
      grid-row: 4/7;
    }
   }
`;
