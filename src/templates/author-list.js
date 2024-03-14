import { graphql } from 'gatsby';
import React from 'react';
import AuthorGrid from '../components/author/AuthorGrid.tsx';
import PageHeader from '../components/PageHeader.tsx';
import PageSpace from '../components/PageSpace.tsx';
import Pagination from '../components/Pagination.tsx';
import Seo from '../components/seo.tsx';

export const AuthorsQuery = graphql`
{
  sanityAreas(name: {eq: "Principal"}) {
    name
  }
    allSanityAreas(filter: {}){
      nodes{
        name
      }
    }
    allSanityAuthor(filter: {}) {
      nodes {
        id
        name
        role
        area {
          name
        }
        instagram
        facebook
        linkedin
        slug {
          current
        }
        profileImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const principal = data.sanityAreas
  const authors = data.allSanityAuthor.nodes;
  const areas = data.allSanityAreas.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <Seo title="Autores" />
      <div className="container">
        <PageHeader
          title="Miembros"
        />
        <AuthorGrid authors={authors} areas={areas} principal={principal}/>
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/authors"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
