import React from 'react';
import { graphql } from 'gatsby';
import PageSpace from '../components/PageSpace.tsx';
import Seo from '../components/seo.tsx';
import PageHeader from '../components/PageHeader.tsx';
import CategoryGrid from '../components/category/CategoryGrid.tsx';
import Pagination from '../components/Pagination.tsx';

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { _createdAt: DESC },
      limit: $limit,
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        description {
          children {
            text
          }
        }
      }
    }
  }
`;

function Categories({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      <Seo title="Categorias" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Categorias"
            description=""
          />
          <CategoryGrid categories={categories} />
          {/* {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/categorias"
            />
          )} */}
        </div>
      </PageSpace>
    </>
  );
}

export default Categories;
