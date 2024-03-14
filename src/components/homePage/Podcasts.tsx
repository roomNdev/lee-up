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
                <a href="www.spotify.com/" className='link' target='_blank'>
                  <FaSpotify color='#1ED760'></FaSpotify>
                  Spotify
                </a>
                <a href="www.music.apple.com/" className='link' target='_blank'>
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
