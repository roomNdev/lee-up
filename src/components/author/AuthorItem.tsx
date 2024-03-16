import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import { socialLinks } from '../../constants/socialLinks';
import { Link } from 'gatsby';

function AuthorItem({ name, directive, area, role, slug, profileImage }) {
  return (
    <AuthorItemStyles className="author-item" >
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
          <ParagraphText className="role">
            {role}
          </ParagraphText>  
        </section>
      </Link>
      
    </AuthorItemStyles>
  );
}

export default AuthorItem;
