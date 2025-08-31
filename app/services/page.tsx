import Carousel from "@/components/Carousel";
import Link from "next/link";
export default function Services() {
  return (
    <div className="bg-[#FFDD55]">
      <main>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-64 mt-14 ">
          <h1 className="text-2xl xl:text-4xl font-extrabold">
            Transforming Your Vision To <br /> Powerful Web Solutions
          </h1>
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-lg font-bold text-xl 
                shadow-[6px_6px_0px_white] hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black]
                border-2 border-black hover:border-white
                transition duration-300 ease-in-out"
          >
            Contact Me
          </Link>
        </div>
        <Carousel />
      </main>
    </div>
  );
}
