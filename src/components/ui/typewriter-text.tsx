import type { FC } from "react";
import Typewriter from "typewriter-effect";

export const TypewriterText: FC<{
  phrases: string[];
}> = (props) => {
  return (
    <Typewriter
      options={{
        strings: props.phrases,
        autoStart: true,
        loop: true,
        delay: 45,
        deleteSpeed: 45,
        pauseFor: 2750,
      }}
    />
  );
};
