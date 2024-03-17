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
    allSanityPoem(sort: {publishedAt:DESC}, limit: 3){
      nodes{
                id
                title
                publishedAt
                 genre {
                  title
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
                  profileImage {
                    asset {
                      gatsbyImageData
                    }
                  }
    }
  }
    }
  }
  `);
  const featuredPoems = data.allSanityPoem.nodes;
  return (
    <FeaturedWritingStyles>
      <Title tag="h2">Escritos recientes</Title>
      <PoemGrid poems={featuredPoems} />
      <Link to="/categorias/escritura-creativa">
        <Button variant='more'>Ver más</Button></Link>
    </FeaturedWritingStyles>
  );
}

export default FeaturedWriting;
