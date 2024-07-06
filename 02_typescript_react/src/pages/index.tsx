import Head from "next/head";
import Menu from "@/components/Menu";
import HomeTop from "@/components/HomeTop";
import HomeServ from "@/components/HomeServ";
import HomePrem from "@/components/HomePrem";

const Home = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Typescript e React</title>
        <meta name="description" content="Site modelo com Typescript e React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <HomeTop />
        <HomeServ />
        <HomePrem />
      </main>
    </>
  );
};

export default Home;
