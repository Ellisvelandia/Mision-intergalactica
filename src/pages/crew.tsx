import { NextPage } from "next";
import { ReactElement, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import range from "../utils/range";
import Layout from "../components/Layout";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import styles from "../styles/pages/Crews.module.css";
import Image from "next/image";
import useBreakpoint from "../hooks/useBreakpoint";
import breakpoints from "../utils/breakpoints";
import PreloadImage from "../components/PreloadImage";

const Crew: NextPage = () => {
  return (
    <Layout
      background="crew"
      className="lg:text-left text-center pb-2.5 sm:pb-0
                 lg:pb-2.5 overflow-y-hidden relative"
    >
      <PrimaryPageTitle>
        <span className="number">2</span>
        CONOZCA A SU TRIPULACIÓN
      </PrimaryPageTitle>
      {crew.map((member, i) => (
        <PreloadImage src={member.images.webp} key={i} />
      ))}
      <CrewMember />
    </Layout>
  );
};

export default Crew;

const CrewMember = () => {
  const [index, setIndex] = useState(0);
  const member = crew[index];

  return (
    <div
      className={`${styles.container} mx-auto uppercase flex max-h-full
                  lg:flex-row flex-col justify-between items-stretch`}
    >
      <div className="flex flex-col">
        <div className={styles.textCon}>
          <TextTransition id={index}>
            <div>
              <h2 className="heading-4 text-white text-opacity-50">
                {member.role}
              </h2>
              <h1 className={`heading-3 text-white ${styles.heading}`}>
                {member.name}
              </h1>
              <p className={`${styles.paragraph} ${styles[member.cls]}`}>
                {member.bio}
              </p>
            </div>
          </TextTransition>
        </div>
        <div
          className={`${styles.circles} flex justify-between lg:mx-0 mx-auto
                      sm:order-none -order-1 sm:my-0 my-8`}
        >
          {range(crew.length).map((i) => (
            <button
              onClick={() => {
                setIndex(i);
              }}
              key={i}
              className={i === index ? "active" : undefined}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex-grow sm:order-none -order-1 h-full">
        <ImageTransition
          id={index}
          className={`${styles.imageCon} ${styles[member.cls]}`}
        >
          <figure className={`${styles.image} relative`}>
            <Image
              src={member.images.webp}
              layout="fill"
              objectFit="contain"
              objectPosition={useBreakpoint(breakpoints.lg) ? "left" : "center"}
              alt={member.name}
            />
          </figure>
        </ImageTransition>
      </div>
    </div>
  );
};

// <Animation> //
const ImageTransition = ({
  id,
  children,
  className,
}: {
  id: number;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <TransitionGroup className={className}>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const TextTransition = ({
  id,
  children,
}: {
  id: number;
  children: ReactElement;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// </Animation> //

// <Types> //
interface ICrewMember {
  cls: string;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}
// </Types> //

// <Data> //
const crew: ICrewMember[] = [
  {
    cls: "hurley",
    name: "Douglas Hurley",
    images: {
      png: "/images/crew/image-douglas-hurley.png",
      webp: "/images/crew/image-douglas-hurley.webp",
    },
    role: "Comandante",
    bio:
      "Douglas Gerald Hurley es un ingeniero estadounidense, ex piloto del Cuerpo de Marines " +
      "piloto y ex astronauta de la NASA. Lanzó al espacio por tercera " +
      "vez como comandante de Crew Dragon Demo-2",
  },
  {
    cls: "shuttleworth",
    name: "Mark Shuttleworth",
    images: {
      png: "/images/crew/image-mark-shuttleworth.png",
      webp: "/images/crew/image-mark-shuttleworth.webp",
    },
    role: "Especialista en misiones",
    bio:
      "Mark Richard Shuttleworth es el fundador y consejero delegado de Canonical, la empresa " +
      "detrás del sistema operativo Ubuntu basado en Linux. Shuttleworth fue el primer " +
      "sudafricano en viajar al espacio como turista espacial",
  },
  {
    name: "Victor Glover",
    cls: "glover",
    images: {
      png: "/images/crew/image-victor-glover.png",
      webp: "/images/crew/image-victor-glover.webp",
    },
    role: "Piloto",
    bio:
      "Piloto en el primer vuelo operacional de la SpaceX Crew Dragon a la " +
      "Estación Espacial Internacional. Glover es comandante de la Marina de los EE.UU. donde " +
      "pilota un F/A-18. Fue miembro de la tripulación de la Expedición 64 y trabajó como " +
      "ingeniero de vuelo de sistemas de la estación",
  },
  {
    cls: "ansari",
    name: "Anousheh Ansari",
    images: {
      png: "/images/crew/image-anousheh-ansari.png",
      webp: "/images/crew/image-anousheh-ansari.webp",
    },
    role: "Ingeniero de vuelo",
    bio:
      "Anousheh Ansari es un ingeniero iraní-estadounidense y cofundador de Prodea " +
      "Systems. Ansari fue la cuarta turista espacial autofinanciada, la primera " +
      "mujer en volar a la ISS, y la primera iraní en el espacio",
  },
];
// </Data> //
