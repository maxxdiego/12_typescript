import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Menu from "@/components/Menu";

 const Home = () : React.ReactElement => {
  return (
    <>
      <Head>
        <title>Typescript e React</title>
        <meta name="description" content="Site modelo com Typescript e React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Página Inicial</h2>
        <Menu />
      </main>
    </>
  );
}

export default Home;