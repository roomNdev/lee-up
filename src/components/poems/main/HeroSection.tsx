import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PoemSectionStyles } from '../../../styles/poem/PoemMainStyles';
import ParagraphText from '../../typography/ParagraphText';

function HeroSection() {
  return (
    <PoemSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
            <h1 className="hero__heading">
              <span className='hero__thin'>Taller de escritura creativa </span>
              con Cesare del Mastro
            </h1>
            <div className='image__container'>
              <StaticImage
                className="hero__image__creativa"
                src="../../../images/hero-creativa.jpeg"
                alt="vr guy"
                placeholder="blurred"
              />
            </div>
        </div>
        <section className='text__wrapper'>
                    <ParagraphText className="creativa__description">
                    El taller de escritura creativa es un proyecto que nació gracias a la iniciativa del profesor <a href='https://faculty.up.edu.pe/es/persons/cesare-del-mastro' target='_blank' rel='norefferer'>Cesare del Mastro</a>, y la <a href='https://www.instagram.com/lagaleriaup/' target='_blank' rel='norefferer'>Galeria UP</a>. A la cual LEE UP se sumó para brindar este espacio y compartir los escritos de los estudiantes participes de este. Este taller tiene como objetivo difundir la escritura creativa tanto en poesía, cuentos y ensayos
                    </ParagraphText>
        </section>
      </div>
    </PoemSectionStyles>
  );
}

export default HeroSection;
