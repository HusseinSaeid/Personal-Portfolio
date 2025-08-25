"use client";

import LogoLoop from "./LogoLoop"; // المسار حسب مكان الملف
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaJs, FaPython, FaGithub } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { ImGit } from "react-icons/im";
import { SiPostman, SiCplusplus } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";

export default function Logos() {
  const logos = [
    {
      node: <IoLogoHtml5 className="text-white hover:text-[#FFDD55]" />,
      title: "HTML5",
    },
    {
      node: <IoLogoCss3 className="text-white hover:text-[#FFDD55]" />,
      title: "CSS3",
    },
    {
      node: <FaJs className="text-white hover:text-[#FFDD55]" />,
      title: "JavaScript",
    },
    {
      node: <BiLogoTypescript className="text-white hover:text-[#FFDD55]" />,
      title: "TypeScript",
    },
    {
      node: <GrReactjs className="text-white hover:text-[#FFDD55]" />,
      title: "React",
    },
    {
      node: <RiNextjsFill className="text-white hover:text-[#FFDD55]" />,
      title: "Next.js",
    },
    {
      node: <BiLogoTailwindCss className="text-white hover:text-[#FFDD55]" />,
      title: "Tailwind CSS",
    },
    {
      node: <ImGit className="text-white hover:text-[#FFDD55]" />,
      title: "Git",
    },
    {
      node: <FaGithub className="text-white hover:text-[#FFDD55]" />,
      title: "GitHub",
    },
    {
      node: <SiPostman className="text-white hover:text-[#FFDD55]" />,
      title: "Postman",
    },
    {
      node: <PiFigmaLogoFill className="text-white hover:text-[#FFDD55]" />,
      title: "Figma",
    },
    {
      node: <SiCplusplus className="text-white hover:text-[#FFDD55]" />,
      title: "C++",
    },
    {
      node: <FaPython className="text-white hover:text-[#FFDD55]" />,
      title: "Python",
    },
  ];

  return (
    <footer className="bg-black  px-8 py-4 hidden xl:block">
      <div className="">
        <LogoLoop
          logos={logos}
          speed={150}
          logoHeight={40}
          gap={50}
          scaleOnHover
          ariaLabel="My Skills"
        />
      </div>
    </footer>
  );
}
