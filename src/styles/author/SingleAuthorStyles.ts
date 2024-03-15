import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  .author-header {
    text-align: center;
  }
  .profileImage {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  .name {
    color: var(--text-1);
    margin-bottom: 1rem;
  }
  .bio {
    margin: 0 auto;
    max-width: 500px;
  }
  .hr {
    margin: 3rem 0;
    color: var(--gray);
  }
  .title, .poems__title {
    color: var(--text-1);
  }
  .poems__title {
    margin-top: 32px;
    text-align: center;
  }
  .author__socialList {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
      a {
        padding: 10px;
        border-radius: 100%;
        background-color: var(--text-1);
        display: inline-block;
        width: 40px;
        height: 40px;
        color: var(--primary-light-blue);
        transition: color .3s;
      }
        a:hover {
          color: var(--light-gray);
        }
      }
    .no__post {
      text-align: center;
      opacity: .6;
    }
`;
