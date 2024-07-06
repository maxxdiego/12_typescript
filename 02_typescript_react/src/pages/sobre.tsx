import Head from "next/head";
import Menu from "@/components/Menu";
import AboutContent from "@/components/AboutContent";
import Footer from "@/components/Footer";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Site modelo com Typescript e React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <AboutContent />
        <Footer />
      </main>
    </>
  );
}
