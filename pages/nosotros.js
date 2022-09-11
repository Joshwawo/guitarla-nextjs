import Image from "next/image";
import Layout from "../components/Layout";
import Style from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros </h2>

        <div className={Style.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />

          <div>
            <p>
              npx create-strapi-app@3.6.8
              Duis et bibendum arcu. Donec sed eros ligula. Nullam dui tellus,
              tincidunt nec sodales tincidunt, lacinia eget tortor. Integer sit
              amet molestie odio, auctor scelerisque magna. Praesent efficitur
              iaculis, faucibus sem vitae, pulvinar risus. Nunc accumsan in nisi
              sed ornare. Donec tincidunt lacinia venenatis. Vestibulum sit amet
              fringilla tortor.
            </p>
            <p>
              Duis et bibendum arcu. Donec sed eros ligula. Nullam dui tellus,
              tincidunt nec sodales tincidunt, lacinia eget tortor. Integer sit
              amet molestie odio, auctor scelerisque magna. Praesent efficitur
              iaculis, faucibus sem vitae, pulvinar risus. Nunc accumsan in nisi
              sed ornare. Donec tincidunt lacinia venenatis. Vestibulum sit amet
              fringilla tortor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
