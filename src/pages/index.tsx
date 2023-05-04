import Image from "next/image";
import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const imageUrl = "/akauntor.png";

export default function Home() {
  return (
    <main
      className={`flex container h-screen flex-col items-center justify-center  ${inter.className}`}
    >
      <Head>
        <title>
          Akauntor - El sistema de contabilidad definitivo para sellos
          discográficos
        </title>
        <meta
          name="description"
          content="Descubre Akauntor, el mejor software de contabilidad para sellos discográficos. Lleva tus finanzas al siguiente nivel y revoluciona la forma en que administras tu negocio."
        />
        <meta
          property="og:title"
          content="Akauntor - El sistema de contabilidad definitivo para sellos discográficos"
        />
        <meta
          property="og:description"
          content="Descubre Akauntor, el mejor software de contabilidad para sellos discográficos. Lleva tus finanzas al siguiente nivel y revoluciona la forma en que administras tu negocio."
        />
        <meta
          property="og:image"
          content="hthttps://akauntor.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://akauntor.com/" />
        <meta property="og:site_name" content="Akauntor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Akauntor - El sistema de contabilidad definitivo para sellos discográficos"
        />
        <meta
          name="twitter:description"
          content="Descubre Akauntor, el mejor software de contabilidad para sellos discográficos. Lleva tus finanzas al siguiente nivel y revoluciona la forma en que administras tu negocio."
        />
        <meta
          name="twitter:image"
          content="https://akauntor.com/images/og-image.jpg"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-1 h-screen flex-col md:flex-col lg:flex-row items-center justify-center">
        <div className="relative lg:mb-0">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={imageUrl}
            alt="Akauntor Logo"
            width={800}
            height={100}
            priority
          />
        </div>
        <div className="flex flex-1 items-center justify-center text-center lg:text-left lg:flex-1 lg:px-4">
          <span className="text-black text-[200px] font-light">{`{ `}</span>
          <p className="text-black text-base lg:text-lg px-4 mt-8">
            Say hello to the ultimate accounting system for record labels ever
            created! Our cutting-edge software will revolutionize the way you
            manage your finances and take your business to new heights. Get
            ready to experience the power of streamlined accounting with our
            game-changing solution.
          </p>
          <span className="text-black text-[200px] font-light">{` }`}</span>
        </div>
      </div>
    </main>
  );
}
