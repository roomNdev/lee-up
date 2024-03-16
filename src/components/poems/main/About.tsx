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
              Cesare del Mastro
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
                      Profesor contratado a tiempo completo e Investigador del Departamento Académico de Humanidades de la Universidad del Pacífico. Es Doctor y Magíster en Filosofía por Université Catholique de Louvain (Bélgica), Magíster en Estudios Ibéricos e Iberoamericanos por Katholieke Universiteit Leuven (Bélgica), y Licenciado en Lingüística y Literatura con mención en Literaturas hispánicas por la Pontificia Universidad Católica del Perú. 
                      Ha obtenido becas de estudio de Fonds National de la Recherche Scientifique (FNRS), Katholischer Akademischer Ausländer-Dienst y Porticus. Ha sido investigador del Fondo Michel Henry de la Universidad Católica de Lovaina, del Centro de Ética de la Universidad del Pacífico y del Instituto Bartolomé de las Casas. Además, es miembro del Círculo Latinoamericano de Fenomenología y del Círculo Peruano de Fenomenología y Hermenéutica. Ha tenido a su cargo cursos de lengua, literatura y filosofía en la Universidad del Pacífico y en la Pontificia Universidad Católica del Perú, así como diversas sesiones de clase de filosofía y literatura en la Universidad Católica de Lovaina. Sus áreas de especialización giran en torno a las relaciones entre estética, ética y literatura en diálogo con la fenomenología francesa (Emmanuel Levinas, Paul Ricur, Michel Henry). Sus investigaciones siguen dos líneas de trabajo interdisciplinario. Se trata, por un lado, de emplear herramientas conceptuales de la fenomenología para abordar temas como la vulnerabilidad, la narración y la experiencia erótica en debate con la perspectiva del desarrollo humano y la ética de las capacidades. Por otro lado, el aporte de la fenomenología se orienta a cuestiones de filología y teoría literaria con un interés particular en escritores contemporáneos franco-belgas y peruanos. Es autor de los libros "La métaphore chez Levinas. Une philosophie de la vulnérabilité" y "Sombras y rostros del Otro en la narrativa de José María Arguedas. Una lectura desde la filosofía de Emmanuel Levinas".
                    </ParagraphText>
                </section>
                
            </section>
        </AboutSectionStyles>
    )
}

export default About