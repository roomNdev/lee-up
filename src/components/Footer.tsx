import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import ParagraphText from './typography/ParagraphText';
import Logo from './Logo';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo/>
      <ParagraphText className="footer__text">
      “El verbo leer, como el verbo amar y el verbo soñar, no soporta el modo imperativo”. - Jorge Luis Borges
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target='_blank'>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          LEE UP {new Date().getFullYear()} © Todos los derechos reservados.
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
