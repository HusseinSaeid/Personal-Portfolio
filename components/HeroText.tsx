"use client";

import Typewriter from "typewriter-effect";

export default function HeroText() {
  return (
    <div className="text-2xl font-bold flex gap-2 text-black">
      <Typewriter
        options={{
          strings: [
            "a Frontend Developer",
            "a JavaScript Developer",
            "a Next.js Specialist",
            "a Continuous Learner",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
