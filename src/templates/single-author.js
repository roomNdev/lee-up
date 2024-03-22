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
      bio
      facebook
      linkedin
      member
      role
      area {
        name
      }
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
          role
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
        genre {
          title
        }
        author {
          role
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
          <ParagraphText className="bio">
            {author.bio}
          </ParagraphText>
          </div>
          {author.member
            ? <Title className="poems__title">{author.role} {`- ${author.area[0].name}`}</Title> 
            : <Title className="poems__title">Miembro del taller de escritura creativa</Title>}
          <div className="author__socialList">
            {author.facebook && <a href={`https://www.${author.facebook.trim()}`} target='_blank'  rel='noreferrer'><FaFacebook/></a>}
            {author.instagram && <a href={`https://www.instagram.com/${author.instagram.trim()}`} target='_blank'rel='noreferrer'><FaInstagram/></a>}
            {author.linkedin &&  <a href={`https://www.${author.linkedin.trim()}`} target='_blank'  rel='noreferrer'><FaLinkedin/></a>}
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
              <Title className="poems__title">Escritura creativa</Title>
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
