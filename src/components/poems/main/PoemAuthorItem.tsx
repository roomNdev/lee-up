import React from 'react';
import { AuthorItemStyles } from '../../../styles/author/AuthorItemStyles';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from '../../typography/Title';
import { PoemAuthorItemStyles } from '../../../styles/poem/PoemAuthorItemStyles';
import ParagraphText from '../../typography/ParagraphText';

function PoemAuthorItem({name, cicle, slug, profileImage}) {
  return (
    <PoemAuthorItemStyles className="author-item">
      <Link to={`/miembros/${slug.current}`}>
        <section className='image__wrapper'>
          <GatsbyImage
            image={profileImage.asset.gatsbyImageData}
            alt={name}
            className="profileImage"
          />
        </section>
        <section className='data'>
          <Title
          className="title">
            {name}
          </Title>
          <ParagraphText className="cicle">{cicle[0] === undefined ? 'Miembro' : cicle[0].cicle}</ParagraphText> 
        </section>
      </Link>
    </PoemAuthorItemStyles>
  );
}

export default PoemAuthorItem;
