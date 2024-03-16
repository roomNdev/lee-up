import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle, Title } from '../typography/Title';
import { FeaturedWritingStyles } from '../../styles/poem/FeaturedWritingStyles';
import BlogGrid from '../blog/BlogGrid';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';

function FeaturedPosts() {
  const data = useStaticQuery(graphql`
  {
    allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
      nodes {
					posts{
            title
            slug {
              current
            }
            author {
              name
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
    }
  `);
  const featuredPosts = data.allSanityFeatured.nodes[0].posts;
  return (
    <FeaturedBlogsStyles>
      <Title tag="h2" className="title">Reseñas destacadas</Title>
      <BlogGrid blogs={featuredPosts} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedPosts;
