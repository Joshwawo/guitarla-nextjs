import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
