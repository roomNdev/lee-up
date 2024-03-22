import { Link } from 'gatsby';
import styled from 'styled-components';

export const PoemAuthorItemStyles = styled.div`
  background-color: var(--text-1);
  border-radius: 8px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 180px;
  min-width: 150px;
  .role {
  }
  .cicle {
    text-align: center;
    color: var(--white-1);
  }
  .image__wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .profileImage {
    width: 120px;
    height: 120px;
    /* aspect-ratio: 1; */
    border-radius: 100%;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    color: var(--white-1);
    font-size: 20px;
    margin-inline: 4px;
    text-align: center;
    margin-top: 4px;
  }
  .role {
    font-size: 20px;
    color: var(--white-1);
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
      @media only screen and (max-width: 768px) {
    
      max-width: 150px;
      min-width: 150px;
      
      .profileImage {
        width: 80px;
        height: 80px;
        aspect-ratio: 1;
        border-radius: 50%;
      }
      .title {
        font-size: 16px;
      }
  .role {
    font-size: 12px;
  }
  }
`;
