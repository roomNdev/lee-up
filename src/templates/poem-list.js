import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import Seo from '../components/seo.tsx';
import PageSpace from '../components/PageSpace.tsx';
import PoemGrid from '../components/poems/PoemGrid.tsx';
import Pagination from '../components/Pagination.tsx';

export const BlogsQuery = graphql`
query poemListQuery($limit: Int!, $offset: Int!) {
  allSanityPoem(sort: {publishedAt: DESC}, limit: $limit, skip: $offset) {    
    nodes {
      id
      title
      publishedAt
      slug {
        current
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
        profileImage {
          asset {
            gatsbyImageData
          }
        }
      }
      coverImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
}
`;

function Poems({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const poems = data.allSanityPoem.nodes;

  return (
    <>
      <Seo title="Poems" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Poemas"
          />
          <PoemGrid poems={poems} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/poemas"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Poems;
