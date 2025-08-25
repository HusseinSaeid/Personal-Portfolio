"use client";

import Typewriter from "typewriter-effect";

export default function HeroText() {
  return (
    <div className="text-2xl font-bold flex gap-2 text-black">
      <span>a</span>
      <Typewriter
        options={{
          strings: [
            "Frontend Developer",
            "JavaScript Developer",
            "Next.js Specialist",
            "Continuous Learner",
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
