import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PodcastsStyles } from '../../styles/homePage/PodcastsStyle';
import ParagraphText from '../typography/ParagraphText';
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { FaSpotify } from 'react-icons/fa';

function Podcasts() {
  return (
    <PodcastsStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Podcast
            </h1>
            <ParagraphText className="description">
            Escúchanos en estas plataformas
            </ParagraphText>
            <section className='links'>
                <a href="https://open.spotify.com/show/1b9b0aNhp2pT7BOv3zOtUo?si=d3442e60284f416a&nd=1&dlsi=377f8f05db4446f8" className='link' target='_blank'>
                  <FaSpotify color='#1ED760'></FaSpotify>
                  Spotify
                </a>
                <a href="https://podcasts.apple.com/pe/podcast/lee-up/id1616994431?l=en" className='link' target='_blank'>
                  <PiApplePodcastsLogoLight color='#AA1DD3'/>
                  Apple Podcast
                </a>
            </section>
          </div>
            <StaticImage
              className="hero__image"
              src="../../images/micro.png"
              alt="Micrófono"
              placeholder="blurred"
              // objectPosition="50% 30%"
            />
        </div>
      </div>
    </PodcastsStyles>
  );
}

export default Podcasts;
