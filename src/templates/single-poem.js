import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { format } from 'date-fns';
import { BiCategory } from 'react-icons/bi';
import { FiCalendar, FiUser } from 'react-icons/fi';
import PageSpace from '../components/PageSpace.tsx';
import ParagraphText from '../components/typography/ParagraphText.tsx';
import { Title } from '../components/typography/Title.tsx';
import SinglePoemStyles from '../styles/poem/SinglePoemStyles.ts';
import MyPortableText from '../components/MyPortableText.tsx';
import Seo from '../components/seo.tsx';
import Button from '../components/buttons/Button.tsx'


export const postQuery = graphql`
  query SinglePoemQuery($id: String!) {
    sanityPoem(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
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
      }
    }
  }
`;

function SinglePoem({ data }) {
  const poem = data.sanityPoem;
  
  return (
    <SinglePoemStyles>
      <Seo title={poem.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="poem-header">
            {
                poem.coverImage &&
                (
                <GatsbyImage
                image={poem.coverImage.asset.gatsbyImageData}
                alt={poem.coverImage.alt}
                className="poem-cover-image"/>
              ) 
            }
            <Title className="title">{poem.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(poem.publishedAt), 'p, MMMM dd, yyyy')}
            </ParagraphText>
            
                {poem.categories.map((item, index) => (
                  <ParagraphText className="categoriesText" key={item.slug.current}>
                  <BiCategory />
                  <span >
                    <span>
                    <Link to={`/categorias/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < poem.categories.length - 1 ? ', ' : ''}
                  </span>
              </span>
            </ParagraphText>
                ))}
            <ParagraphText className="author">
              <FiUser />
              <Link to={`/miembros/${poem.author.slug.current}`}>
                {poem.author.name}
              </Link>
            </ParagraphText>
          </div>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={poem._rawBody} />
          </div>
          <div className='button__wrapper'>
          {/* <Link to='/'>
            <Button variant='more'>
              {'< Inicio'}
            </Button>
          </Link> */}
          </div>
        </div>
      </PageSpace>
    </SinglePoemStyles>
  );
}

export default SinglePoem;
