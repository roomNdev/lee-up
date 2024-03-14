import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled.div`
  background-color: var(--primary-light-blue);
  border-radius: 8px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .profileImage {
    width: 190px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    color: var(--text-1);
    font-size: 24px;
  }
  .role {
    font-size: 20px;
    color: var(--text-1);
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
`;
