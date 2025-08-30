import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp, IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="bg-[#FFDD55] min-h-screen w-full flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Navbar />
      </header>

      <div className="mt-12 flex flex-col items-center justify-center gap-6 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Get In Touch
        </h1>
        <p className="text-lg sm:text-2xl text-center max-w-2xl">
          Have a project in mind or just want to chat? I&apos;d love to hear
          from you.
          <br /> Let&apos;s create something amazing together.
        </p>

        {/* Contact & Form Section */}
        <div className="mt-8 flex flex-col xl:flex-row items-center justify-center gap-10 w-full">
          {/* Contact Information */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-[6px_6px_0px_black] w-full max-w-md h-[450px]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Contact Information
            </h2>

            <div className="flex flex-col items-start  text-2xl sm:text-xl gap-4 mt-8 ml-8">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-black" />
                <span>+20 1021094777</span>
              </div>
              <div className="flex items-center gap-3">
                <IoMailSharp className="text-black" />
                <span className="break-all">hussein.saeid306@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <IoLocationOutline className="text-black" />
                <span>Mansoura, Egypt</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-20 flex flex-wrap justify-center gap-5 ">
              <a
                href="https://www.linkedin.com/in/hussein-elsaeid-445032238/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl flex items-center justify-center 
                bg-black text-white w-14 h-14 rounded-2xl shadow-[4px_4px_0px_white]
                hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black] 
                transition duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/HusseinSaeid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl flex items-center justify-center 
                bg-black text-white w-14 h-14 rounded-2xl shadow-[4px_4px_0px_white]
                hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black] 
                transition duration-300 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01f2c2e3af3fc6dd96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl flex items-center justify-center 
                bg-black text-white w-14 h-14 rounded-2xl shadow-[4px_4px_0px_white]
                hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_black] 
                transition duration-300 ease-in-out"
              >
                <FaUpwork />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black text-white p-6 rounded-2xl shadow-[6px_6px_0px_white] w-full max-w-md h-[450px]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Email Me
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
