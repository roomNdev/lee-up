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
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ParagraphText from '../components/typography/ParagraphText.tsx';


export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      instagram
      facebook
      linkedin
      member
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
          member
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
  console.log(author);
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
          {author.member
            ? <Title className="poems__title">Miembro</Title> 
            : <Title className="poems__title">Miembro del taller de escritura creativa</Title>}
          <div className="author__socialList">
            <a href={`https://www.facebook.com/${author.facebook}`} target='_blank'  rel='noreferrer'><FaFacebook/></a>
            <a href={`https://www.instagram.com/${author.instagram}`} target='_blank'rel='noreferrer'><FaInstagram/></a>
            <a href={`https://www.linkedin.com/${author.linkedin}`} target='_blank'  rel='noreferrer'><FaLinkedin/></a>
        </div>
          {blogs[0] 
            ?  <BlogGrid blogs={blogs} />  
            :   <>
            <Title className="poems__title">Reseñas</Title>
            <hr className="hr" />
            <ParagraphText className="no__post">No hay reseñas todavia</ParagraphText>
            </>
          }
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
