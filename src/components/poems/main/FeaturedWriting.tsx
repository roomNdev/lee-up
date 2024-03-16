import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ParagraphText from '../../typography/ParagraphText';
import { SectionTitle, Title } from '../../typography/Title';
import PoemGrid from '../PoemGrid';
import { FeaturedWritingStyles } from '../../../styles/poem/FeaturedWritingStyles';
import Button from '../../buttons/Button';

function FeaturedWriting() {
  const data = useStaticQuery(graphql`
  {
    allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
      nodes {
        writing{
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
        }
      }
    }
  }
  `);
  const featuredPoems = data.allSanityFeatured.nodes[0].writing;
  return (
    <FeaturedWritingStyles>
      <Title tag="h2">Algunos Poemas</Title>
      <PoemGrid poems={featuredPoems} />
      <Link to="/categorias/escritura-creativa"><Button variant='more'>Ver más</Button></Link>
    </FeaturedWritingStyles>
  );
}

export default FeaturedWriting;
