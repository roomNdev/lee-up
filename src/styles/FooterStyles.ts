import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 2rem 0 2rem 0;
  text-align: center;
  background-color: var(--primary-light-blue);
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-block: 2rem;
    border-radius: 8px;
    display: flex;
    background-color: var(--text-1);
      flex-direction: row;
      align-items: center;
      justify-content: center;
      /* width: max-content; */
      /* margin: 2rem auto; */
      flex-wrap: wrap;
    li {
      margin: 0 1rem;
      a {
        padding: 4px;
        font-size: 1.6rem;
        transition: color .3s;
      }
      &:hover {
        a{
        color: var(--light-gray);
      }
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      margin: 0 0.5rem;
      a {
        padding: 10px;
        border-radius: 100%;
        background-color: var(--text-1);
        display: inline-block;
        width: 50px;
        /* aspect-ratio: 1; */
        height: 50px;
        color: var(--white-1);
        transition: color .3s;
      }
      &:hover {
        a {
          color: var(--light-gray);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 768px) {
    .footer__menuList{
      display: none;
    }
    .footer__socialList{
      li{
      a{
        padding: 7px;
        width: 35px;
        height: 35px;
      }
    }
    }
    .copyright {
      font-size: 1rem;
    }
  }
`;
