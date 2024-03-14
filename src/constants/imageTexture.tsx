import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { ImageTextureStyles } from '../styles/imageTextureStyles'

const ImageTexture: React.FC<{}> = () => {
    return (
        <ImageTextureStyles>
            <section className='image__wrapper'>
                <StaticImage
                  className="aside__image"
                  src="../images/textura-izquierda-1.png"
                  alt="Textura izquierda"
                  placeholder="blurred"
                  // objectPosition="50% 30%"
                />
                <StaticImage
                  className="aside__image"
                  src="../images/textura-derecha-1.png"
                  alt="Textura derecha"
                  placeholder="blurred"
                  style={{right: 0}}
                  // objectPosition="50% 30%"
                />
            </section>
        </ImageTextureStyles>
    )
}

export default ImageTexture