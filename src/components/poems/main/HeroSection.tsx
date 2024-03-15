import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../../styles/homePage/HeroSectionStyles';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              <span className='hero__thin'>Club de lectura</span>
              Universidad del Pacífico
            </h1>
          </div>
            <StaticImage
              className="hero__image"
              src="../../images/bg-hero.png"
              alt="vr guy"
              placeholder="blurred"
              // objectPosition="50% 30%"
            />
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
