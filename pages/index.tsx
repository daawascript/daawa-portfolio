import type { NextPage } from "next";
import Head from "next/head";
import { useState, WheelEventHandler } from "react";
import Hero from "../components/Hero";
import MyWork from "../components/MyWork";
import NavBar from "../components/NavBar";
import WhyMe from "../components/WhyMe";

const Home: NextPage = () => {
  const [scrollTarget, setScrollTarget] = useState("");

  const handleScroll: WheelEventHandler<HTMLElement> = (e) => {
    setScrollTarget(e.currentTarget.id);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar scrollTarget={scrollTarget} />
      <main className="min-h-screen">
        <Hero handleScroll={handleScroll} />
        <WhyMe handleScroll={handleScroll} />
        <MyWork handleScroll={handleScroll} />
      </main>
    </div>
  );
};

export default Home;
