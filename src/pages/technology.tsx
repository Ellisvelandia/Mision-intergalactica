import { NextPage } from "next";
import { ReactElement, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "../components/Layout";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import range from "../utils/range";
import styles from "../styles/pages/Technology.module.css";
import Image from "next/image";
import useBreakpoint from "../hooks/useBreakpoint";
import breakpoints from "../utils/breakpoints";
import PreloadImage from "../components/PreloadImage";

const Technology: NextPage = () => {
  const isBreakpointLg = useBreakpoint(breakpoints.lg);
  return (
    <Layout background="technology">
      <PrimaryPageTitle className="!max-w-[1290px] mr-0 !px-4">
        <span className="number">3</span>
        LANZAMIENTO ESPACIAL 101
      </PrimaryPageTitle>
      {techs.map((tech, i) =>
        isBreakpointLg ? (
          <PreloadImage src={tech.images.portrait} key={i} />
        ) : (
          <PreloadImage src={tech.images.landscape} key={i} />
        )
      )}
      <TechnologyItem />
    </Layout>
  );
};

export default Technology;

const TechnologyItem = () => {
  const [index, setIndex] = useState(0);
  const tech = techs[index];

  return (
    <div
      className={`${styles.container} flex justify-between lg:flex-row flex-col
                        items-stretch text-white lg:text-left text-center`}
    >
      <div className="lg:flex justify-between mt-[2.125rem] sm:mt-14 lg:mt-0">
        <div
          className="flex lg:flex-col justify-between lg:h-[18.2625rem] xl:mr-20
                         lg:mr-12 w-[9.5rem] sm:w-[13.125rem] lg:w-fit lg:mx-0 mx-auto"
        >
          {range(techs.length).map((i) => (
            <div
              className={`${styles.circle} ${index == i ? "active" : ""}`}
              onClick={() => {
                setIndex(i);
              }}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="lg:mt-0 sm:mt-11 mt-[1.625rem] lg:px-0 px-3">
          <Animation id={index}>
            <div>
              <h3 className="nav-font text-blue">terminología</h3>
              <h1 className={`${styles.heading} heading-3 uppercase`}>
                {tech.name}
              </h1>
              <p className={`${styles.paragraph} text-blue mx-auto lg:mx-0`}>
                {tech.description}
              </p>
            </div>
          </Animation>
        </div>
      </div>
      <div className="lg:order-none -order-1">
        <Animation id={index}>
          <div className={`${styles.image} relative lg:max-w-[42.5vw]`}>
            <Image
              src={
                useBreakpoint(breakpoints.lg)
                  ? tech.images.portrait
                  : tech.images.landscape
              }
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={tech.name}
            />
          </div>
        </Animation>
      </div>
    </div>
  );
};

// <Data> //
const techs = [
  {
    name: "Vehículo de lanzamiento",
    images: {
      portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "Un vehículo de lanzamiento o cohete portador es un vehículo propulsado por cohete utilizado " +
      "para transportar una carga útil desde la superficie terrestre al espacio, normalmente a la órbita terrestre " +
      "o más allá. Nuestro cohete portador WEB-X es el más potente en funcionamiento. " +
      "Con sus 150 metros de altura, es un espectáculo impresionante en la plataforma de lanzamiento",
  },
  {
    name: "Puerto espacial",
    images: {
      portrait: "/images/technology/image-spaceport-portrait.jpg",
      landscape: "/images/technology/image-spaceport-landscape.jpg",
    },
    description:
      "Un puerto espacial o cosmódromo es un lugar de lanzamiento (o recepción) de naves espaciales, por " +
      "analogía con el puerto marítimo para los buques o el aeropuerto para los aviones. Con sede en el famoso " +
      "Cabo Cañaveral, nuestro puerto espacial está idealmente situado para aprovechar la " +
      "rotación de la Tierra para el lanzamiento",
  },
  {
    name: "Cápsula espacial",
    images: {
      portrait: "/images/technology/image-space-capsule-portrait.jpg",
      landscape: "/images/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "Una cápsula espacial es una nave espacial a menudo tripulada que utiliza una cápsula de reentrada de cuerpo romo " +
      "cápsula para reentrar en la atmósfera terrestre sin alas. Nuestra cápsula es donde " +
      "pasarás tu tiempo durante el vuelo. Incluye un gimnasio espacial, cine, y " +
      "muchas otras actividades para mantenerte entretenido",
  },
];
// </Data> //

// <Animations> //
const Animation = ({
  id,
  children,
  className,
}: {
  id: number;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <TransitionGroup className={className || ""}>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.animEnter,
          enterActive: styles.animEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// <Animations> //
