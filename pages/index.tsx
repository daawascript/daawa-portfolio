import type { NextPage } from "next";
import Head from "next/head";
import HeroBackground from "../components/HeroBackground";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import WhyMe from "../components/WhyMe";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="min-h-screen">
        <Hero />
        <WhyMe />
      </main>
    </div>
  );
};

export default Home;
