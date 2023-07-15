import React from "react";
import Counter from "../inputs/Counter";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative aspect-square h-[800px] w-full">
      <Image src="/room-1.jpg" alt="" fill />
    </div>
  );
};

export default Hero;
