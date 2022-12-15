import { formatearFecha } from "../helpers";
import Link from "next/link";
import Image from "next/image";
import Entrada from "../styles/Entrada.module.css";

const entrada = ({ entrada }) => {
  // console.log(entrada)

  const { titulo, resumen, imagen, published_at, id, url } = entrada;

  return (
    <article>
      {imagen && (
        <Image
          layout="responsive"
          priority="true"
          width={800}
          height={600}
          src={imagen.url}
          alt={`imagen blog ${titulo}`}
        />
      )}

      <div className={Entrada.contenido}>
        <h3>{titulo}</h3>
        <p className={Entrada.fecha}>{formatearFecha(published_at)}</p>
        <p className={Entrada.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <p className={Entrada.enlace}>Leer Entrada</p>
        </Link>
      </div>
    </article>
  );
};

export default entrada;
