import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
        background-color: var(--text-1);
        border-radius: 8px;
    li {
      display: inline-block;
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
`;
