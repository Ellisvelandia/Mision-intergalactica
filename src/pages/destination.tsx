import { Fragment, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Destinations.module.css";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import PreloadImage from "../components/PreloadImage";
import Image from "next/image";

const Destinations: NextPage = () => {
  return (
    <Layout className={`text-white pb-2.5`} background="destination">
      <PrimaryPageTitle className={styles.title}>
        <span className="number">1</span>
       SELECCIONE SU DESTINO
      </PrimaryPageTitle>
      <Destination />
    </Layout>
  );
};

export default Destinations;

const Destination = () => {
  const [index, setIndex] = useState(0);
  const destination = destinations[index];

  return (
    <div
      className={`${styles.container} flex mx-auto lg:flex-row flex-col
                  lg:text-left text-center`}
    >
      <div className={`${styles.half}`}>
        <ImageAnim index={index}>
          <figure className={`${styles.image} relative h-full`}>
            <Image
              src={destination.images.webp}
              layout="fill"
              objectFit="contain"
              objectPosition="left center"
              alt={destination.name}
            />
          </figure>
        </ImageAnim>
      </div>
      <div className={`${styles.half}`}>
        <div>
          <ul
            className={`${styles.menu} flex justify-between nav-font text-blue
                        lg:m-0 mx-auto`}
          >
            {destinations.map((item, i) => (
              <Fragment key={i}>
                <PreloadImage src={item.images.webp} />
                <li
                  className={`${styles.menuItem} ${
                    i === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  {item.name}
                </li>
              </Fragment>
            ))}
          </ul>
          <TextAnim index={index}>
            <div>
              <h1 className="heading-2">{destination.name.toUpperCase()}</h1>
              <p className="text-blue sm:mt-5 mt-3 sm:mb-12 mb-7">
                {destination.description}
              </p>
            </div>
          </TextAnim>
          <hr className="border-white border-opacity-25" />
          <TextAnim index={index}>
            <div className="sm:flex my-7 sm:space-y-0 space-y-7">
              <div className="flex-grow space-y-3.5">
                <h4 className="subheading-2 text-blue">AVG. DISTANCIA</h4>
                <h3 className="subheading-1">{destination.distance}</h3>
              </div>
              <div className="flex-grow space-y-3.5">
                <h4 className="subheading-2 text-blue">
                  Tiempo estimado de viaje
                </h4>
                <h3 className="subheading-1">{destination.travel}</h3>
              </div>
            </div>
          </TextAnim>
        </div>
      </div>
    </div>
  );
};

// <Animations> //
const ImageAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          exit: "!hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
const TextAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: "!hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// </Animations> //

// <Data> //
const destinations = [
  {
    name: "Moon",
    images: {
      png: "/images/destination/image-moon.png",
      webp: "/images/destination/image-moon.webp",
    },
    description:
      "Vea nuestro planeta como nunca antes lo había visto. Un viaje relajante perfecto " +
      "para recuperar la perspectiva y volver renovado. Mientras esté allí, sumérjase " +
      "un poco de historia visitando los lugares de aterrizaje del Luna 2 y el Apolo 11",
    distance: "384,400 km",
    travel: "3 dias",
  },
  {
    name: "Mars",
    images: {
      png: "/images/destination/image-mars.png",
      webp: "/images/destination/image-mars.webp",
    },
    description:
      "No olvides las botas de montaña. Las necesitarás para enfrentarte a Olympus Mons, " +
      "la montaña planetaria más alta de nuestro sistema solar. Es dos veces y media " +
      "el tamaño del Everest",
    distance: "225 mil. km",
    travel: "9 meses",
  },
  {
    name: "Europa",
    images: {
      png: "/images/destination/image-europa.png",
      webp: "/images/destination/image-europa.webp",
    },
    description:
      "La más pequeña de las cuatro lunas galileanas que orbitan Júpiter, Europa es un " +
      "de invierno. Con una superficie helada, es perfecta para patinar sobre hielo, jugar al curling, " +
      "hockey, o simplemente para relajarse en su acogedora cabaña invernal",
    distance: "628 mil. km",
    travel: "3 años",
  },
  {
    name: "Titan",
    images: {
      png: "/images/destination/image-titan.png",
      webp: "/images/destination/image-titan.webp",
    },
    description:
      "Titán, la única luna conocida con atmósfera densa aparte de la Tierra, es un hogar lejos " +
      "de casa (¡sólo unos cientos de grados más fría!). Además, se obtienen vistas impresionantes de " + "los Anillos de Saturno"
      + "los anillos de Saturno",
    distance: "1.6 bil. km",
    travel: "7 años",
  },
];
// </Data> //
