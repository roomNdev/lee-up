import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import BlogGrid from '../components/blog/BlogGrid.tsx';
import PoemGrid from '../components/poems/PoemGrid.tsx';
import MyPortableText from '../components/MyPortableText.tsx';
import PageSpace from '../components/PageSpace.tsx';
import Seo from '../components/seo.tsx';
import { Title } from '../components/typography/Title.tsx';
import { SingleAuthorStyles } from '../styles/author/SingleAuthorStyles.ts';

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      profileImage {
        asset {
          gatsbyImageData
        }
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
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
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityPoem(filter: { author: { id: { eq: $id } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
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
  }
`;

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;
  const poems = data.allSanityPoem.nodes;
  
  return (
    <PageSpace top={80} bottom={100}>
      <Seo title={author.name} />
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt={author.name}
              className="profileImage"
            />
            <Title className="name">{author.name}</Title>
            <div className="bio">
              <MyPortableText value={author._rawBio} />
            </div>
          </div>
          {/* <Title className="title">Reseñas</Title> */}
          <hr className="hr" />
          <BlogGrid blogs={blogs} />  
          {
            poems[0] && (
              <>
              <Title className="poems__title">Poemas</Title>
              <hr className="hr" />
              <PoemGrid poems={poems} />
              </>
            )
            }
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;
