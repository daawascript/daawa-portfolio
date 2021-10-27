import React from "react";
import Image from "next/image";
import topPattern from "../lib/images/hero-pattern-top.svg";
import bottomPattern from "../lib/images/hero-pattern-bottom.svg";

const HeroBackground = () => {
  return (
    <div className="h-full w-screen absolute top-0 left-0 -z-10">
      <div className="absolute top-0 left-0 -z-10 hidden lg:block w-full">
        <Image src={topPattern} alt="" layout="responsive" />
      </div>
      <div className="absolute -bottom-1 right-0 -z-10 w-full 2xl:w-1/2">
        <Image src={bottomPattern} alt="" layout="responsive" />
      </div>
    </div>
  );
};

export default HeroBackground;
