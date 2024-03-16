import { graphql } from 'gatsby';
import React from 'react';
import DirectiveGrid from '../components/author/DirectiveGrid.tsx';
import AuthorGrid from '../components/author/AuthorGrid.tsx';
import ExMemberGrid from '../components/author/ExMemberGrid.tsx';
import PageHeader from '../components/PageHeader.tsx';
import PageSpace from '../components/PageSpace.tsx';
import Pagination from '../components/Pagination.tsx';
import Seo from '../components/seo.tsx';

export const AuthorsQuery = graphql`
{
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
        directive
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
  // const directiva = data.sanityAreas
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <Seo title="Autores" />
      <div className="container">
        <PageHeader
          title="Directiva"
        />
        <DirectiveGrid />
        <AuthorGrid />
        <ExMemberGrid/>
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/miembros"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
