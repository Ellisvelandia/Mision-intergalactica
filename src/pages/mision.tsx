import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";

const mision: NextPage = () => {
  return (
    <Layout background="home" className="pb-2.5 overflow-hidden">
      <header className={`${styles.hero} h-full`}>
        <div className={`container w-full ${styles.container}`}>
          <div className={styles.half}>
            <h5 className="heading-5 text-blue">
              ¡Saludos a todos los habitantes de la galaxia!
            </h5>
            <h1 className="sm:mt-7 mt-5">
              Conectividad y acceso a la información para planetas menos
              desarrollados
            </h1>
            <p
              className={`text-justify text-blue sm:mt-7 mt-5 ${styles.paragraph}`}
            >
              Me siento honrado de ser parte del Comité Intergaláctico de Mejora
              de Condiciones de Vida, una organización que tiene como objetivo
              mejorar la calidad de vida de los habitantes de planetas menos
              desarrollados. Como miembro de este comité, creo firmemente en el
              poder del internet para conectar a las personas de todo el mundo,
              brindándoles acceso al conocimiento y a oportunidades que antes
              eran inaccesibles. A través de mi propia experiencia, he sido
              testigo de cómo el internet puede cambiar vidas individuales y
              transformar comunidades enteras. Hace unos años, tuve la
              oportunidad de visitar un pequeño pueblo en un país en desarrollo.
              Allí, vi cómo el acceso a internet mejoró significativamente la
              vida de las personas. Los niños pudieron acceder a una educación
              de calidad, las comunidades remotas tuvieron acceso a servicios
              médicos vitales y se abrieron nuevas oportunidades de negocio. Fue
              una experiencia conmovedora que me demostró el impacto
              transformador que el internet puede tener en la vida de las
              personas. Por lo tanto, hago un llamado a todos los habitantes de
              la galaxia para trabajar juntos y llevar el poder del internet a
              aquellos que aún no lo tienen. Debemos esforzarnos por conectarnos
              con comunidades menos desarrolladas, brindándoles las herramientas
              y recursos necesarios para crecer y prosperar. ¡Juntos podemos
              hacer una gran diferencia!
            </p>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default mision;
