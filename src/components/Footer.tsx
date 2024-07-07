import Image from "next/image";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Footer = () => {
  return (
    <div
      className="bg-black min-h-[30rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#702881] to-[#D72675] md:text-7xl text-3xl lg:text-6xl font-bold relative z-20">
        Kenroz
      </h1>
      <p className="text-white mt-10 text-lg text-center relative z-20">
        Take a lead, get notified!
      </p>

      <span className="text-white mt-10">
        All rights reserved &copy; {new Date().getFullYear()} Kenroz
      </span>
    </div>
  );
};

export default Footer;
