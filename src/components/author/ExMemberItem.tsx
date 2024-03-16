import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ExMemberItemStyles } from '../../styles/author/ExMemberItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import { socialLinks } from '../../constants/socialLinks';
import { Link } from 'gatsby';

function ExMemberItem({ name, role, slug, profileImage }) {
  return (
    <ExMemberItemStyles className="author-item" >
      <Link to={`/miembros/${slug.current}`}>
        <section className='image__wrapper'>
          <GatsbyImage
            image={profileImage.asset.gatsbyImageData}
            alt={name}
            className="profileImage"
          />
        </section>
        <section className='data'>
          <Title tag={"h2"}
          className="title">
            {name}
          </Title>
          <ParagraphText className="role">
            {role}
          </ParagraphText>  
        </section>
      </Link>
      
    </ExMemberItemStyles>
  );
}

export default ExMemberItem;
