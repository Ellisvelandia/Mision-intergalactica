import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout background="home" className="pb-2.5 overflow-hidden">
      <header className={`${styles.hero} h-full`}>
        <div className={`container w-full ${styles.container}`}>
          <div className={styles.half}>
            <h5 className="heading-5 text-blue">
              COMITÉ INTERGALÁCTICO DE MEJORA DE CONDICIONES DE VIDA
            </h5>
            <h1 className=" sm:mt-7 mt-5">
              SOLUCIÓN A LA CONECTIVIDAD Y ACCESO A LA INFORMACIÓN EN PLANETAS
              MENOS DESARROLLADOS
            </h1>
            <p className={`text-justify text-blue sm:mt-7 mt-5 ${styles.paragraph}`}>
              Bienvenidos al comité intergaláctico de mejora de condiciones de
              vida. Como primer trabajo, necesitamos abordar uno de los mayores
              problemas en los planetas menos desarrollados: su conectividad y
              acceso a la información. Esto puede ser un gran desafío, ya que
              muchos de estos planetas carecen de tecnología y recursos. Sin
              embargo, con la ayuda de la programación, podemos encontrar una
              solución. En esta reunión, les explicaré cómo podemos utilizar la
              tecnología para mejorar la conectividad y el acceso a la
              información en estos planetas, mejorando así la calidad de vida de
              sus habitantes.
            </p>
          </div>
          <div className={`${styles.half} flex justify-end`}>
            <a
              href="/mision"
              className={`${styles.exploreBtn} after:grid
                                after:place-content-center`}
            ></a>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
