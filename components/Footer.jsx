import React from "react";
import Link from "next/link";
import Styled from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styled.footer}>
      <div className={`contenedor ${Styled.contenido} `}>
        <nav className={`${Styled.navegacion}`} >
          <Link href="/">Incio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
        <p className={Styled.copyright} >Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
