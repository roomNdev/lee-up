import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import Seo from '../components/seo.tsx';
import PageSpace from '../components/PageSpace.tsx';
import BlogGrid from '../components/blog/BlogGrid.tsx';
import Pagination from '../components/Pagination.tsx';

export const BlogsQuery = graphql`
query BlogsQuery($limit: Int!, $offset: Int!){
  allSanityBlog(sort: {publishedAt: DESC},limit: $limit,skip: $offset) {    
    nodes {
      id
      title
      publishedAt
      excerpt {
  		  _rawChildren
  		}
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
        role
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

function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <Seo title="Blogs" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Reseñas de nuestros miembros"
          />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/posts"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Blogs;
