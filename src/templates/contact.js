import PageSpace from '../components/PageSpace.tsx';
import Seo from '../components/seo.tsx';
import { Title } from '../components/typography/Title.tsx';
import ContactStyles from '../styles/contactStyles.ts'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { StaticImage } from 'gatsby-plugin-image';
import ParagraphText from '../components/typography/ParagraphText.tsx'

// import dotenv from 'dotenv'
// dotenv.config()

function AuthorList({ data, pageContext }) {
  const form = useRef();
  const [isTooltipShowing, setIsTooltipShowing] = useState({display: false, status: ""})
  const displayTooltip = (value) => {
    setIsTooltipShowing({display: true, status: value})
    setTimeout(() => {
      setIsTooltipShowing({display: false, status: value})
    }, 3000)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_8nr81rx', 'template_nnka0ra', form.current, {
      publicKey: 'EUegBhPVzc5CFFQka',
    })
      .then(
        () => {
          form.current[0].value = ""
          form.current[1].value = ""
          form.current[2].value = ""
          form.current[3].value = ""
          displayTooltip("Mensaje enviado")
        },
        (error) => {
          displayTooltip("Error al enviar mensaje")
        },
      );
  };

  return (  
  <PageSpace top={80} bottom={100}>
    <Seo title="Contacto" />
    <ContactStyles>
      <div className={`${isTooltipShowing.display ? 'tooltip-active' : 'tooltip-inactive'} tooltip`}>
        {isTooltipShowing.status}
      </div>
      <div className="container">
         <Title className="title">
             Contacto
         </Title>
         <section className='image__wrapper'>
            <div className='left'>
              <StaticImage
                className="left__image"
                src="../images/imagen-contacto-1.jpeg"
                alt="vr guy"
                placeholder="blurred"
                // objectPosition="50% 30%"
              />
            </div>
            <div className='right'>
              <StaticImage
              className="right__image"
              src="../images/imagen-contacto-2.jpeg"
              alt="vr guy"
              placeholder="blurred"
              // objectPosition="50% 30%"
            />
            </div>
            
         </section>
      <form ref={form} onSubmit={sendEmail} className='form'>
        <section className='info'>
          <input type="text" name="user_name" id='name' placeholder='Nombre' 
          required
          />
          <input type="text" name="user_surname" id='surname' placeholder='Apellido'/>
        </section>
          <input type="email" name="user_email" id='email' placeholder='E-mail' 
          required
          />
        <textarea name="message" id='message' placeholder='Mensaje' 
        required
        />
        <ParagraphText className="label"> ¿Quieres colaborar o ser parte de nosotros? Contáctanos</ParagraphText>
        <input type="submit" value="Enviar" id='submit'/>
      </form>
        <div className='maps'>
          <Title className="title">
            Encuentranos en
          </Title>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe title='Ubicación de la UP' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Jr.+Gral%2C+Jir%C3%B3n+Luis+S%C3%A1nchez+Cerro+2141+Lima%2C+Jes%C3%BAs+Mar%C3%ADa+15072%2C+Per%C3%BA&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://online.stopwatch-timer.net/pomodoro-timer">
              tomato timer
            </a>
          <br/>
          <a href="https://www.calc-calc.com/">
            calculator
          </a>
          <br/>
          <style>
          </style>
          <a href="https://www.ongooglemaps.com">generate Google Maps</a>
            <style>
            </style>
          </div>
        </div>
        </div>
      </div>
    </ContactStyles>
  </PageSpace>
  );
};

export default AuthorList;