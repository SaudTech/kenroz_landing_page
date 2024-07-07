import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";

const Intro = () => {
  const words = ["User_Friendly", "Efficient"];

  return (
    <div className="w-full h-full text-primary-foreground flex relative md:mt-0">
      <div className="md:max-w-[70%] z-20 w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex justify-center flex-col">
        <h1 className="text-5xl font-bold">
            Enhance Learning with a
            <div>
              <FlipWords duration={2000} words={words} />
            </div>
            Software
        </h1>
        <p className="mt-5 text-lg">
          A distinctive school management app, Kenroz, partners with parents,{" "}
          <br />
          teachers, and educational institutions to improve the education
          system.
        </p>

        <div className="flex space-x-3 mt-5">
          <Button className="w-full max-w-[300px]">Feature we provide</Button>
          <Button variant={"outline"} className="w-full max-w-[300px] bg-white">
            Request a demo
          </Button>
        </div>
      </div>
      <div className="left-2/4 -top-[60%] md:z-10 absolute">
        <Image
          src="\Learning-bro.svg"
          alt="Learning"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Intro;
