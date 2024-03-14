import { Link } from 'gatsby';
import styled from 'styled-components';

export const SearchResultItemStyles = styled(Link)`
  width: 100%;
  background-color: var(--white-1);
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 8px;
  .img {
    width: 50px;
    height: 40px;
    border-radius: 4px;
  }
  .title {
    font-size: 1.6rem;
    color: var(--gray);
  }
  .categoriesText {
    font-size: 1.3rem;
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .authorProfileImg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
