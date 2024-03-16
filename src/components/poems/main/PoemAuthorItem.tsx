import React from 'react';
import { AuthorItemStyles } from '../../../styles/author/AuthorItemStyles';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from '../../typography/Title';
import { PoemAuthorItemStyles } from '../../../styles/poem/PoemAuthorItemStyles';

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
          {cicle}
        </section>
      </Link>
    </PoemAuthorItemStyles>
  );
}

export default PoemAuthorItem;
