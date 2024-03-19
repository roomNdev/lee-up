import React from 'react'
import ParagraphText from '../../typography/ParagraphText'
import { AboutSectionStyles } from '../../../styles/poem/AboutStyles'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Title } from '../../typography/Title'

const About: React.FC<{}> = () => {
    return (
        <AboutSectionStyles>
            {/* <section className='container'>
            </section> */}
            <Title tag={"h2"} className="title">
              Conoce a Cesare del Mastro
            </Title>
            <section className="bio__container">
              <section className='text__wrapper'>
                    <ParagraphText className="creativa__description">
                    <StaticImage
                      className="bio__image"
                      src="../../../images/Profesor-Cesare.jpg"
                      alt="Cesare del Mastro"
                      placeholder="blurred"
                    />
                      Cesare es un distinguido profesor del Departamento Académico de Humanidades de la Universidad del Pacífico, con una sólida formación académica obtenida en Bélgica y Perú. Posee doctorado y magisterio en Filosofía por la Université Catholique de Louvain, y un magisterio adicional en Estudios Ibéricos e Iberoamericanos. Su educación inicial se cimentó en Lingüística y Literatura en la Pontificia Universidad Católica del Perú. Su carrera está marcada por becas prestigiosas y una participación activa en investigación, especialmente en temas que unen estética, ética y literatura a través de la fenomenología francesa. Sus investigaciones interdisciplinarias abordan temas de vulnerabilidad y experiencia humana, además de contribuciones a la filología y teoría literaria, con un enfoque en escritores franco-belgas y peruanos. Ha impartido cursos de filosofía, lengua y literatura en varias universidades y es autor de los libros "La métaphore chez Levinas. Une philosophie de la vulnérabilité" y "Sombras y rostros del Otro en la narrativa de José María Arguedas. Una lectura desde la filosofía de Emmanuel Levinas".
                    </ParagraphText>
                </section>
                
            </section>
        </AboutSectionStyles>
    )
}

export default About