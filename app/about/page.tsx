import Navbar from "../../components/Navbar";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { ImGit } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
export default function About() {
  return (
    <div className="bg-[#FFDD55] min-h-screen w-screen p-4">
      <header>
        <Navbar />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start mt-12 max-w-6xl mx-auto">
        {/* About Me Card */}
        <div className="relative md:col-span-2 shadow-[6px_6px_0px_white] bg-black rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12  index-1 lg:p-16 xl:max-h-[40vh]  overflow-y-auto scrollbox">
            <h1 className="text-[#FFDD55] font-extrabold text-center text-3xl md:text-4xl tracking-tight mb-4">
              Who I Am
            </h1>
            <p className="text-white/90 leading-relaxed mb-10 text-lg md:text-xl text-center max-w-3xl mx-auto animate-fade-in">
              Hi 👋, I’m{" "}
              <span className="font-bold text-[#FFDD55]">Hussein</span>, a
              passionate{" "}
              <span className="font-bold text-[#FFDD55]">
                Frontend Developer
              </span>{" "}
              who loves building clean and interactive user interfaces with{" "}
              <span className="font-bold text-[#FFDD55]">React</span>,{" "}
              <span className="font-bold text-[#FFDD55]">Next.js</span>, and{" "}
              <span className="font-bold text-[#FFDD55]">Tailwind CSS</span>.
              <br />
              <br />I enjoy solving problems and creating experiences that users
              love. With a background in{" "}
              <span className="font-bold text-[#FFDD55]">
                JavaScript
              </span> and{" "}
              <span className="font-bold text-[#FFDD55]">TypeScript</span>, I
              focus on writing clean, scalable, and maintainable code. I’m also
              passionate about performance optimization and making websites
              accessible to everyone.
              <br />
              <br />
              Beyond coding, I enjoy learning new technologies, experimenting
              with creative UI/UX ideas, and continuously improving my skills to
              keep up with the fast-paced world of web development. My goal is
              to contribute to impactful projects and deliver products that make
              a difference.
            </p>
          </div>
        </div>

        {/* Skills Card */}
        <div className="relative shadow-[6px_6px_0px_white] bg-black rounded-2xl overflow-hidden h-full">
          <div className=" max-h-[60vh] overflow-y-auto scrollbox p-6">
            <h2 className="text-[#FFDD55] font-extrabold text-center text-2xl md:text-3xl mb-4 tracking-tight">
              Skills
            </h2>
            <div className="grid grid-cols-4 gap-3 place-items-center text-5xl text-white">
              <IoLogoHtml5 className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <IoLogoCss3 className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <FaJs className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <GrReactjs className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <RiNextjsFill className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <BiLogoTailwindCss className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <BiLogoTypescript className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <ImGit className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <FaGithub className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <SiPostman className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <PiFigmaLogoFill className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <SiCplusplus className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
              <FaPython className="hover:text-[#FFDD55] hover:scale-115 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative shadow-[6px_6px_0px_white] bg-black rounded-2xl overflow-hidden h-full">
          <div className="p-6 max-h-[60vh] overflow-y-auto scrollbox">
            <h2 className="text-[#FFDD55] font-extrabold text-center text-2xl md:text-3xl mb-4 tracking-tight">
              Vision
            </h2>
            <p className="text-white/90 leading-relaxed">
              My vision is to craft user-focused, clean, and highly interactive
              web experiences that truly make a difference in people’s lives. I
              aim to leverage modern technologies like React, Next.js, and
              Tailwind CSS to build applications that are not only visually
              appealing but also fast, accessible, and scalable. I continuously
              seek to learn, innovate, and push the boundaries of web
              development, turning ideas into impactful products that users love
              and rely on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
