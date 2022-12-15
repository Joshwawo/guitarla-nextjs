import Layout from "../components/Layout";
import Link from "next/link";
import Style from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
  return (
    <Layout>
      <div className={Style.noEncontrado}>
        <h1 className=" heading">Error 404 página no encontrada</h1>
        <Link href="/">Volver al Inicio</Link>
      </div>
    </Layout>
  );
};

export default NoEncontrado;
