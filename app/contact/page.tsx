import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="bg-[#FFDD55] min-h-screen w-screen flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Navbar />
      </header>
      <div className="mt-20 flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="text-2xl">
          Have a project in mind or just want to chat? I&apos;d love to hear
          from you. Let&apos;s create something amazing together.
        </p>
        <div className="mt-8 flex flex-col xl:flex-row items-center justify-center gap-20">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
            <p className="text-lg">hussein@example.com</p>
          </div>
          <div className="bg-black text-white p-6 rounded-lg shadow-lg h-[450px]">
            <h2 className="text-3xl font-bold mb-2">Email Me</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
