import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  // console.log(pagina)
  return (
    <div>
      <Head>
        <title>GuitarLA -</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
