import React from "react";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Abilities = () => {
  const texts = [
    { text: "More" },
    { text: "great" },
    { text: "things" },
    { text: "in" },
    { text: "Kenroz" },
  ]
  return (
    <div className="container max-w-[1300px] mx-auto">
      <TypewriterEffectSmooth words={texts} />

      <div className="bg-primary-500 p-4 rounded-lg max-w-[100%] mx-auto">
        <BentoGridThirdDemo />
      </div>
    </div>
  );
};

export default Abilities;
