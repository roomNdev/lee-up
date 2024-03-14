import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import { socialLinks } from '../../constants/socialLinks';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby';

function AuthorItem({ name, area, instagram, linkedin, facebook, role, slug, profileImage }) {
  return (
    <AuthorItemStyles className="author-item" >
      <Link to={`/miembros/${slug.current}`}>
        <GatsbyImage
          image={profileImage.asset.gatsbyImageData}
          alt={name}
          className="profileImage"
        />
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
      <div className="author__socialList">
            <a href={`https://www.facebook.com/${facebook}`} target='_blank'><FaFacebook/></a>
            <a href={`https://www.instagram.com/${instagram}`} target='_blank'><FaInstagram/></a>
            <a href={`https://www.linkedin.com/${linkedin}`} target='_blank'><FaLinkedin/></a>
        </div>
    </AuthorItemStyles>
  );
}

export default AuthorItem;
