import Link from "next/link";
import Styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className="contenedor">
        <div className={Styles.barra}>
          <Link href="/">
            <a>
              <Image
                width={400}
                height={100}
                src="/img/logo.svg"
                alt="imagen logo "
              />
            </a>
          </Link>

          <nav className={Styles.navegacion}>
            <Link href="/">Incio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
