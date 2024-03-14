import React from 'react'
import ParagraphText from '../typography/ParagraphText'
import { AboutSectionStyles } from '../../styles/homePage/AboutStyles'
import { StaticImage } from 'gatsby-plugin-image'
import ImageTexture from '../../constants/imageTexture'

const About: React.FC<{}> = () => {
    return (
        <AboutSectionStyles>
            <section className='container'>
                <h1>
                ¿Quienes somos?
                </h1>
                <section className='text__wrapper'>
                    <ParagraphText className="">
                    Lee UP (LUP) es una organización estudiantil (OE) fundada en octubre del 2021. Actualmente, la organización cuenta con un equipo más grande y busca seguir creciendo.
                    </ParagraphText>
                    <ParagraphText>LUP busca promover la lectura en la universidad, brindando un espacio en donde se puedan compartir el conocimiento, la crítica y la discusión. Creemos que la experiencia de leer no debería ser aislada, sino que el conocimiento que se adquiera se pueda compartir con la comunidad.
                    </ParagraphText>
                    <ParagraphText>
                    De este modo, si alguna persona de la comunidad UP lee un libro, lo disfruta y quiere compartir lo que ha leído con los demás, nuestras plataformas son el espacio en donde podrá hacerlo.
                    </ParagraphText>
                </section>
                <ImageTexture/>
            </section>
        </AboutSectionStyles>
    )
}

export default About