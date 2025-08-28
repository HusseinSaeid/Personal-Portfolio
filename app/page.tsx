import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import Logos from "../components/Logos";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-[#FFDD55] min-h-screen w-screen flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Navbar />
      </header>

      {/* Hero Section */}
      <main className="flex-1  flex items-center justify-center">
        <section className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20  gap-12">
          {/* Left Side (Text) */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-black leading-snug text-center">
              Hello,
              <br /> I&apos;m Hussein
            </h2>
            <HeroText />

            <div className="flex flex-wrap gap-6 mt-8">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg font-bold text-xl 
                shadow-[6px_6px_0px_white] hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black]
                border-2 border-black hover:border-white
                transition duration-300 ease-in-out"
              >
                Contact Me
              </Link>

              <a
                href="/Hussein ElSaeid Cv.pdf"
                download
                className="bg-black text-white px-6 py-3 rounded-lg font-bold text-xl
                shadow-[6px_6px_0px_white] hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black] 
                transition duration-300 ease-in-out"
              >
                Download CV
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/hussein-elsaeid-445032238/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-3x1 flex items-center flex-col justify-center bg-black text-white px-3 py-3 rounded-lg shadow-[4px_4px_0px_white]
              hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black] 
                transition duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/HusseinSaeid"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-3x1 flex items-center justify-center bg-black text-white px-3 py-3 rounded-lg shadow-[4px_4px_0px_white]
              hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black] 
                transition duration-300 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01f2c2e3af3fc6dd96"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-3x1 flex items-center justify-center bg-black text-white px-3 py-3 rounded-lg shadow-[4px_4px_0px_white]
              hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black] 
                transition duration-300 ease-in-out"
              >
                <FaUpwork />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Logos />
    </div>
  );
}
