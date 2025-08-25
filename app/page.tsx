import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import Logos from "../components/Logos";

export default function Home() {
  return (
    <div className="bg-[#FFDD55] min-h-screen w-screen flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Navbar />
      </header>

      {/* Hero Section */}
      <main className="flex-1 mt-32">
        <section className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 mt-16 gap-12">
          {/* Left Side (Text) */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-extrabold text-black leading-snug">
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
          </div>

          {/* Right Side (Image) */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/avatar.png"
              alt="Picture of the author"
              width={320}
              height={500}
              priority
              className="rounded-lg shadow-[6px_6px_0px_black] outline-2 outline-black"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Logos />
    </div>
  );
}
