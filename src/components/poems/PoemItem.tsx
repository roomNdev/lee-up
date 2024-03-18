import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { PoemItemStyles } from '../../styles/poem/PoemItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';
import Button from '../buttons/Button';

function PoemItem({ path, author, title, image, publishedAt, genre }) {
  return (
    <PoemItemStyles>
      {image.coverImage && <Link to={`/escritura-creativa/${path}`}>
        <GatsbyImage
          image={image.coverImage.asset.gatsbyImageData}
          alt={image.coverImage.alt}
          className="img"
        />
      </Link>}
      
      <Link to={`/escritura-creativa/${path}`}>
        <Title tag={"h3"} className="title">{title}</Title>
        <ParagraphText className="by__container">Por: {author.name} | <Link to={`/miembros/${author.slug.current}`}>
        <GatsbyImage
          image={author.profileImage.asset.gatsbyImageData}
          alt={`Foto de perfil de ${author.name}`}
          className="author__img"
        />
      </Link></ParagraphText>
      </Link>
      <div className='button__wrapper'>
        <Button tag="a" variant='' className="button__more">
          <Link to={`/escritura-creativa/${path}`}>Leer más</Link>
        </Button>
      </div>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
          
      {genre[0] && 
          <ParagraphText>
            {genre[0].title}
          </ParagraphText>
        }
        </ParagraphText>
      )}
    </PoemItemStyles>
  );
}

export default PoemItem;
