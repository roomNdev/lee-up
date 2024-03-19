import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle, Title } from '../typography/Title';
import { FeaturedWritingStyles } from '../../styles/poem/FeaturedWritingStyles';
import BlogGrid from '../blog/BlogGrid';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import Button from '../buttons/Button';

function FeaturedPosts() {
  const data = useStaticQuery(graphql`
  {
    allSanityBlog(sort: {publishedAt:DESC}, limit: 3) {
      nodes {
            title
            slug {
              current
            }
            author {
              name
              role
              slug {
                current
              }
              profileImage{
                asset {
                  gatsbyImageData
                }
              }
            }
            coverImage{
              asset {
                gatsbyImageData
              }
            }
            excerpt{
              _rawChildren
            }
          }
        
      }
    }
  `);
  const featuredPosts = data.allSanityBlog.nodes;
  return (
    <FeaturedBlogsStyles>
      <Title tag="h2" className="title">Últimas reseñas</Title>
      <BlogGrid blogs={featuredPosts} />
      <Link to="/posts" className='more'>
        <Button variant='more'>Ver todas las reseñas</Button>
      </Link>
    </FeaturedBlogsStyles>
  );
}

export default FeaturedPosts;
