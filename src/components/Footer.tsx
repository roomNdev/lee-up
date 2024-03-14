import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
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
