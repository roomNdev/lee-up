import styled from 'styled-components';

export default styled.header`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 140px;
  z-index: 1000;
  background-color: var(--primary-light-blue);
  overflow: hidden;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav__wrapper {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      li {
        &:hover {
          a {
            background-color: var(--white-1);
          }
        }
        a {
          color: var(--text-1);
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: background-color 0.3s;
        }
      }
    }
  }

  .searchIcon {
    cursor: pointer;
    font-size: 25px;
    .searchIcon__wrapper {
      border-radius: 6px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color .3s;
      background-color: var(--white-1);
    }
    &:hover .searchIcon__wrapper {
      background-color: var(--light-gray);
    }
  }
  .mobileMenuCloseBtn,
  .mobileNavBg,
  .mobileIcon,
  .mobileMenuBtn {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .mobileMenuCloseBtn,
    .mobileNavBg,
    .mobileIcon,
    .mobileMenuBtn {
      display: initial;
    }
    .mobileIcon {
      color: var(--text-1);
    }
    .nav__wrapper {
      nav {
        z-index: 1002;
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        transform: translateX(100%);
        background-color: var(--primary-light-blue);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease transform;
        ul {
          width: 90%;
          margin: 0 auto;
          flex-direction: column;
          li {
            display: block;
            margin: 0.5rem 0;
            &:hover {
              a {
                background-color: var(--light-gray);
              }
            }
            a {
              width: 100%;
              padding: 0.5rem 1rem;
              border-radius: 4px;
            }
            &.searchIcon {
              display: none;
            }
            
          }
        }
        .mobileMenuCloseBtn {
          color: crimson;
          position: absolute;
          top: 10px;
          right: 10px;
          border-color: crimson;
          &:hover {
            background-color: crimson;
            color: var(--white);
          }
        }
      }
      &.open {
        nav {
          transform: translateX(0);
        }
      }
      .mobileNavBg {
        z-index: 1001;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.6s linear 0s;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .mobileIcon {
      display: flex;
      gap: 1rem;
    }
    .mobileMenuBtn {
      svg {
        font-size: 2.5rem;
      }
    }
  }
`;
