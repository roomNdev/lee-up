import React from 'react';
// import { GrTechnology } from 'react-icons/gr';
import { StaticImage } from 'gatsby-plugin-image';


import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <StaticImage
              className="logo"
              src="../images/icon.png"
              alt="Lee up Icon"
              placeholder="blurred"
              // objectPosition="50% 30%"
            />
    </LogoStyles>
  );
}

export default Logo;
