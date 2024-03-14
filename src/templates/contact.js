import PageSpace from '../components/PageSpace.tsx';
import Seo from '../components/seo.tsx';
import { Title } from '../components/typography/Title.tsx';
import ContactStyles from '../styles/contactStyles.ts'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv'
// dotenv.config()

function AuthorList({ data, pageContext }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a1zbv1c', 'template_rwbzqun', form.current, {
        publicKey: 'kHdRrLQaeSiijvDaR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (  
  <PageSpace top={80} bottom={100}>
    <Seo title="Contacto" />
    <ContactStyles>
      <div className="container">
         <Title className="title">
             Contacto
         </Title>
      <form ref={form} onSubmit={sendEmail} className='form'>
        <section className='info'>
          <input type="text" name="user_name" id='name' placeholder='Nombre'/>
          <input type="text" name="user_surname" id='surname' placeholder='Apellido'/>
        </section>
          <input type="email" name="user_email" id='email' placeholder='E-mail'/>
        <textarea name="message" id='message' placeholder='Mensaje'/>
        <input type="submit" value="Enviar" />
      </form>
      </div>
    </ContactStyles>
  </PageSpace>
  );
};

export default AuthorList;