import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import BlogGrid from '../components/blog/BlogGrid.tsx';
import PoemGrid from '../components/poems/PoemGrid.tsx';
import PageHeader from '../components/PageHeader.tsx';
import PageSpace from '../components/PageSpace.tsx';
import Seo from '../components/seo.tsx';
import { Title } from '../components/typography/Title.tsx';
import { SingleCategoryStyles } from '../styles/category/SingleCategoryStyles.ts';
import ParagraphText from '../components/typography/ParagraphText.tsx';

export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        excerpt {
          _rawChildren
        }
        author {
          slug {
            current
          }
          profileImage {
            asset {
              gatsbyImageData
            }
          }
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityPoem(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
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
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleCategory({ data }) {
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;
  const poems = data.allSanityPoem.nodes;

  console.log(poems);
  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <Seo title={category.title} />
          <PageHeader title={category.title} className="pageHeader">
            <ParagraphText className="description">
              {category._rawDescription[0].children[0].text}
            </ParagraphText>
            <GatsbyImage
              image={category.coverImage.asset.gatsbyImageData}
              alt={category.coverImage.alt || ''}
              className="coverImage"
            />
          </PageHeader>
          <BlogGrid blogs={blogs} />
          { poems[0] && 
          (<>
            <Title className="title">Escritura creativa</Title>
          <hr className="hr" />
          <PoemGrid poems={poems} />
          </>
          )
          }
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;
