import { graphql } from 'gatsby';
import React from 'react';
// import PageHeader from '../components/PageHeader.tsx';
import Seo from '../components/seo.tsx';
import PageSpace from '../components/PageSpace.tsx';
// import Pagination from '../components/Pagination.tsx';
import HeroSection from '../components/poems/main/HeroSection.tsx'
import About from '../components/poems/main/About.tsx'
import PoemGrid from '../components/poems/main/PoemAuthorsGrid.tsx'
import FeaturedWriting from '../components/poems/main/FeaturedWriting.tsx'

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
  // const { currentPage, numberOfPages } = pageContext;
  // const poems = data.allSanityPoem.nodes;

  return (
    <>
      <Seo title="Poems" />
      <PageSpace top={10} bottom={100}>
        <div className="container">
          {/* <PageHeader
            title="Taller de escritura creativa con Cesare del Mastro"
          /> */}
          <HeroSection />
          <FeaturedWriting/>
          {/* <PoemGrid poems={poems} />
          {numberOfPages > 1 && (
            <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL="/poemas"
            />
            )} */}
            <PoemGrid/>
            <About/>
        </div>
      </PageSpace>
    </>
  );
}

export default Poems;
