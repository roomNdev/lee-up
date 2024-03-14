import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { PoemItemStyles } from '../../styles/poem/PoemItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';
import Button from '../buttons/Button';

function PoemItem({ path, author, title, image, publishedAt }) {
  return (
    <PoemItemStyles>
      {image.coverImage && <Link to={`/poemas/${path}`}>
        <GatsbyImage
          image={image.coverImage.asset.gatsbyImageData}
          alt={image.coverImage.alt}
          className="img"
        />
      </Link>}
      <Link to={`/miembros/${author.slug.current}`}>
        <GatsbyImage
          image={author.profileImage.asset.gatsbyImageData}
          alt={`Foto de perfil de ${author.name}`}
          className="author__img"
        />
      </Link>
      <Link to={`/poemas/${path}`}>
        <Title tag={"h3"} className="title">{title}</Title>
      </Link>
      <div className='button__wrapper'>
        <Button tag="a" variant='' className="button__more">
          <Link to={`/poemas/${path}`}>Leer más</Link>
        </Button>
      </div>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
    </PoemItemStyles>
  );
}

export default PoemItem;
