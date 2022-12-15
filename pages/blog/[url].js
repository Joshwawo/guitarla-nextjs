import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers";
import Style from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  //   const router = useRouter();
  //   console.log(router.query);
  //Manera de hacer una sulta del params
  const { contenido, imagen, published_at, titulo } = entrada;

  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <p className="heading">{titulo}</p>
        <article className={Style.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={titulo}
          />
          <div className={Style.contenido}>
            <p className={Style.fecha}>{formatearFecha(published_at)}</p>
            <p className={Style.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;

  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));

  // console.log(paths)

  //   const paths = entradas.map((entrada) => ({
  //     params: { id: entrada.id.toString() },
  //   }));

  //   console.log(paths);

  //   console.log(paths[0].params.id)
  //   console.log(entrada);

  return {
    paths,
    fallback: false, //(false,true,blocking)
  };
}

export async function getStaticProps({ params: { url } }) {
  //   const url = `http://localhost:1337/blogs/${id}`;
  // http://localhost:1337/blogs?url=entrada-de-blog-6-resumen-1
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;

  //   console.log(url)
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  //   console.log(entrada);

  return {
    props: {
      entrada: entrada[0],
      //Le puedo poner entrada/Entrada pero es rebundante en javascript moderno
    },
  };
}

// export async function getServerSideProps({ query: { id } }) {
// const url = `${process.env.API_URL}/blogs${id}`;

//   //   console.log(url)
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();
//   //   console.log(entrada);

//   return {
//     props: {
//       entrada,
//       //Le puedo poner entrada/Entrada pero es rebundante en javascript moderno
//     },
//   };
// }

export default EntradaBlog;
