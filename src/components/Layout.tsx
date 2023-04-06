import Head from "next/head";
import React from "react";
import Navbar from "../layouts/Navbar";

export default function Layout(props: {
  children: React.ReactNode | React.ReactNode[];
  background: string;
  className?: string;
}) {

  return (
    <>
      <Head>
        <title>Desafío Creativo - Comunicación</title>
      </Head>
      <div className="fixed w-full h-full top-0 opacity-50  left-0 -z-50">
        <video autoPlay loop muted className="w-full">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <main className={`overflow-hidden ${props.className || ""}`}>
        {props.children}
      </main>
    </>
  );
}
